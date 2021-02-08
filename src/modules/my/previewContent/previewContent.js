/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, api } from 'lwc';

export default class PreviewContent extends LightningElement {
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

  @api
  content;

  get className() {
    const tagClass = 'slds-vertical-tabs__content preview-content-wrapper';
    return this.selected === this.type
      ? `${tagClass} slds-show`
      : `${tagClass} slds-hide`;
  }

  get fileName() {
    return `${this.prefix ? this.prefix : ''}${this.filename}.${
      this.extension
    }`;
  }
}
