/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api, LightningElement } from 'lwc';

export default class FormContent extends LightningElement {
  @api
  tab;

  updateForm = (type, value) => {
    console.log('update form', type, value);
    this.dispatchEvent(
      new CustomEvent('update', {
        detail: { type, value }
      })
    );
  };
}
