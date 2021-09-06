/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api } from 'lwc';
import { TYPE_PROPERTIES } from '../constants/formEvents';
import FormContent from '../FormContent/FormContent';
import { DEFAULT_PROPERTY } from '../constants';

export default class FormProperties extends FormContent {
  @api
  properties;
  @api
  targets;

  pDefCount = 0;

  connectedCallback() {
    this.addPropertyRow();
  }

  addPropertyRow = () => {
    const id = `propertyId_${this.pDefCount++}`;
    this.update([...this.properties, { ...DEFAULT_PROPERTY, id }]);
  };

  deletePropertyRow = (e) => {
    const properties = this.properties.filter((p) => p.id !== e.detail);
    this.update(properties);
  };

  onChangePropertyRow = (e) => {
    const properties = this.properties.filter((p) => p.id !== e.detail.id);
    properties.push(e.detail);
    this.update(properties);
  };

  update(properties) {
    this.updateForm(TYPE_PROPERTIES, properties);
  }
}
