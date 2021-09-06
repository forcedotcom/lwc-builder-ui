/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api } from 'lwc';
import { TYPE_SOBJECTS } from '../constants/formEvents';
import FormContent from '../FormContent/FormContent';

export default class FormSobjects extends FormContent {
  @api
  sobjects;

  oDefCount = 0;

  connectedCallback() {
    this.addObjectRow();
  }

  addObjectRow = () => {
    const oId = `objectId_${this.oDefCount}`;
    this.update([...this.sobjects, { id: oId }]);
    this.oDefCount++;
  };

  deleteObjectRow = (e) => {
    const sobjects = this.sobjects.filter((o) => o.id !== e.detail);
    this.update(sobjects);
  };

  onChangeObjectRow = (e) => {
    const sobjects = this.sobjects.filter((o) => o.id !== e.detail.id);
    sobjects.push(e.detail);
    this.update(sobjects);
  };

  update = (sobjects) => {
    this.updateForm(TYPE_SOBJECTS, sobjects);
  };
}
