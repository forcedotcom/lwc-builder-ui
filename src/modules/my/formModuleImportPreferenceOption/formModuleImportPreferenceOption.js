/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api, LightningElement } from 'lwc';
export default class FormModuleImportPreferenceOption extends LightningElement {
  @api
  option;

  @api
  preference;

  get isChecked() {
    return this.option.value === this.preference.value;
  }

  onChangePreference(e) {
    const { name, value } = e.currentTarget;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          name,
          value
        }
      })
    );
  }
}
