/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api } from 'lwc';
import { TYPE_LIFECYCLE_HOOKS } from '../constants/formEvents';
import FormContent from '../FormContent/FormContent';

export default class FormLifecycleHooks extends FormContent {
  @api
  lifecycleHooks;

  onChangeCheckbox(e) {
    const { name, checked } = e.currentTarget;
    const changed = this.lifecycleHooks.map((h) => {
      if (h.value === name) {
        return { ...h, checked };
      }
      if (h.options) {
        const changedOptions = h.options.map((o) => {
          if (o.value !== name) {
            return o;
          }
          return { ...o, checked };
        });
        return { ...h, options: changedOptions };
      }
      return h;
    });
    console.log(changed);
    this.updateForm(TYPE_LIFECYCLE_HOOKS, changed);
  }
}
