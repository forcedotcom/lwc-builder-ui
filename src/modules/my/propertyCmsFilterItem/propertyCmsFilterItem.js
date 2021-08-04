/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, api } from 'lwc';
export default class PropertyCmsFilterItem extends LightningElement {
  @api
  filter;

  @api
  isCustom = false;

  isChecked = false;

  customFilterValue = '';

  onChangeCheckbox = (e) => {
    this.isChecked = e.currentTarget.checked;
    this.dispatchEvent(
      new CustomEvent('changefilteritem', {
        detail: {
          filter: this.filter,
          isCustom: this.isCustom,
          isChecked: this.isChecked
        }
      })
    );
  };

  onChangeInput = (e) => {
    this.customFilterValue = e.currentTarget.value;
    this.dispatchEvent(
      new CustomEvent('changefilteritem', {
        detail: {
          filter: { ...this.filter, value: this.customFilterValue },
          isCustom: this.isCustom,
          isChecked: !!this.customFilterValue
        }
      })
    );
  };

  deleteCustomFilter = () => {
    this.dispatchEvent(
      new CustomEvent('deletefilteritem', {
        detail: {
          filterId: this.filter.id
        }
      })
    );
  };

  get filterId() {
    return `propFilter${this.filter.value}`;
  }

  get customFilterId() {
    return `propCustomFilter${this.filter.id}`;
  }
}
