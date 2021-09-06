/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api } from 'lwc';
import FormContent from '../FormContent/FormContent';
import { TYPE_MODULES } from '../constants/formEvents';
export default class FormModuleImports extends FormContent {
  @api
  modules;

  connectedCallback() {}

  onChangeCheckbox(e) {
    const { name, checked } = e.currentTarget;
    const changed = this.modules.map((c) => {
      const changedModules = c.modules.map((m) => {
        if (m.value !== name) {
          return m;
        }
        return { ...m, checked };
      });
      return { ...c, modules: changedModules };
    });
    console.log(changed);
    this.updateForm(TYPE_MODULES, changed);
  }
}
