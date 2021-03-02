/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement } from 'lwc';

export default class LanguageSelector extends LightningElement {
  isFocused = false;
  languages = ['English', '日本語'];
  selected = this.languages[0];

  onFocus = () => {
    this.isFocused = true;
  };

  onBlur = () => {
    this.isFocused = false;
  };

  get comboboxClass() {
    return `slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click ${
      this.isFocused ? 'slds-is-open' : ''
    }`;
  }
  onSelectOption = (e) => {
    this.selected = e.detail;
    this.isFocused = false;
  };
}
