/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api, LightningElement } from 'lwc';
export default class TargetDefinition extends LightningElement {
  @api
  target;

  enabled;

  connectedCallback() {
    this.enableSmall = this.isSmallFormFactorSupported;
    this.enableLarge = this.isFormFactorSupported;
    this.enableHeadless = false;
    this.enabled = false;
  }

  onChangeLargeCheckbox = (e) => {
    this.enableLarge = e.target.checked;
    this.onChange();
  };
  onChangeSmallCheckbox = (e) => {
    this.enableSmall = e.target.checked;
    this.onChange();
  };

  onChangeActionTypeCheckbox = (e) => {
    this.enableHeadless = e.target.checked;
    this.onChange();
  };

  onChangeTargetCheckbox = (e) => {
    this.enabled = e.target.checked;
    this.onChange();
  };

  get disabledCheck() {
    return !this.enabled;
  }

  get largeFormId() {
    return `${this.target.value}-form-large`;
  }

  get smallFormId() {
    return `${this.target.value}-form-small`;
  }

  onChange = () => {
    this.dispatchEvent(
      new CustomEvent('changetarget', {
        detail: {
          target: this.target,
          enabled: this.enabled,
          small: this.enableSmall,
          large: this.enableLarge,
          headlessAction: this.enableHeadless
        }
      })
    );
  };

  /* Form Factor */
  get isFormFactorSupported() {
    return (
      this.target.value === 'lightning__AppPage' ||
      this.target.value === 'lightning__RecordPage' ||
      this.target.value === 'lightning__HomePage'
    );
  }
  get isSmallFormFactorSupported() {
    return (
      this.target.value === 'lightning__AppPage' ||
      this.target.value === 'lightning__RecordPage'
    );
  }

  /* Quick Action */
  get isActionTypeSupported() {
    return this.target.value === 'lightning__RecordAction';
  }

  get actionTypeFormId() {
    return `${this.target.value}-action-type`;
  }
}
