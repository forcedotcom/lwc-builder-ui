/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, api } from 'lwc';

export default class LanguageSelectorOption extends LightningElement {
  @api
  language;

  @api
  selected;

  get isSelected() {
    return this.selected === this.language;
  }

  get optionClass() {
    return `slds-media slds-listbox__option slds-listbox__option_plain slds-media_small ${
      this.isSelected ? 'slds-is-selected' : ''
    }`;
  }

  onClickOption = () => {
    this.dispatchEvent(
      new CustomEvent('select', {
        detail: this.language
      })
    );
  };
}
