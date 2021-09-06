/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api } from 'lwc';
import { TYPE_CUSTOM_PROPERTY_EDITOR } from '../constants/formEvents';
import FormContent from '../FormContent/FormContent';

export default class FormFlowCustomPropertyEditor extends FormContent {
  @api
  customPropertyEditor;

  onChangeInput(e) {
    const { name, value } = e.currentTarget;
    const changed = { [name]: value };
    this.update(changed);
  }

  update(changed) {
    this.updateForm(TYPE_CUSTOM_PROPERTY_EDITOR, changed);
  }
}
