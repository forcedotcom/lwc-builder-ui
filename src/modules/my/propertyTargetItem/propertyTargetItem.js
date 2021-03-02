/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, api } from 'lwc';

export default class PropertyTargetItem extends LightningElement {
  @api
  target;

  isChecked = false;

  onChangeTargetCheckbox = (e) => {
    this.isChecked = e.currentTarget.checked;
    this.dispatchEvent(
      new CustomEvent('changepropitem', {
        detail: {
          target: this.target,
          isChecked: this.isChecked
        }
      })
    );
  };

  get targetId() {
    return `propTarget${this.target.value}`;
  }
}
