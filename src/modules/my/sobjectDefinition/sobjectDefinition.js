/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, api } from 'lwc';

export default class SobjectDefinition extends LightningElement {
  @api
  oid = '';

  name = '';

  onChangeInput = (e) => {
    this.name = e.target.value;
    this.dispatchEvent(
      new CustomEvent('changesobj', {
        detail: {
          id: this.oid,
          name: this.name
        }
      })
    );
  };

  deleteRow = () => {
    this.dispatchEvent(
      new CustomEvent('deletesobj', {
        detail: this.oid
      })
    );
  };
}
