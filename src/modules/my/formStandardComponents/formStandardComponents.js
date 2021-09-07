/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api } from 'lwc';
import FormContent from 'my/formContent';
import { TYPE_STANDARD_COMPONENTS } from '../constants/formEvents';

export default class FormStandardComponents extends FormContent {
  @api
  standardComponents;

  onChangeCheckbox(e) {
    const { name, checked } = e.currentTarget;
    const changed = this.standardComponents.map((c) => {
      if (c.value === name) {
        return { ...c, checked };
      }
      if (c.options) {
        const changedOptions = c.options.map((o) => {
          if (o.value !== name) {
            return o;
          }
          return { ...o, checked };
        });
        return { ...c, options: changedOptions };
      }
      return c;
    });
    this.updateForm(TYPE_STANDARD_COMPONENTS, changed);
  }
}
