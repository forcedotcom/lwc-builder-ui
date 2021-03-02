/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, api } from 'lwc';

export default class PreviewHeader extends LightningElement {
  @api
  filename;

  @api
  extension;

  @api
  prefix;

  @api
  type;

  @api
  selected;

  get className() {
    const tagClass = 'preview-header slds-vertical-tabs__nav-item';
    return this.selected === this.type
      ? `${tagClass} slds-is-active`
      : tagClass;
  }

  get tabIndex() {
    return this.selected === this.type ? '0' : '-1';
  }

  get isSelected() {
    return this.selected === this.type ? 'true' : 'false';
  }

  get fileName() {
    return `${this.prefix ? this.prefix : ''}${this.filename}.${
      this.extension
    }`;
  }

  onclickTab() {
    this.dispatchEvent(
      new CustomEvent('clicktab', {
        detail: this.extension
      })
    );
  }
}
