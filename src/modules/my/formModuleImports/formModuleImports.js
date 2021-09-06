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

  onChangeCheckbox(e) {
    const { name, checked } = e.currentTarget;
    const changed = this.modules.map((c) => {
      if (c.value === name) {
        return { ...c, checked };
      }
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

  onChangeSubmoduleCheckbox(e) {
    const { name, checked } = e.currentTarget;
    console.log(e.currentTarget.id);
    const changed = this.modules.map((c) => {
      const changedModules = c.modules.map((m) => {
        if (!m.submodules) {
          return m;
        }
        const changedSubs = m.submodules.map((sm) => {
          if (sm.id !== name) {
            return sm;
          }
          return { ...sm, checked };
        });
        return { ...m, submodules: changedSubs };
      });
      return { ...c, modules: changedModules };
    });
    console.log(changed);
    this.updateForm(TYPE_MODULES, changed);
  }
}
