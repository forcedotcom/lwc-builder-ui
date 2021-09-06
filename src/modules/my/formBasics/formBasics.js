/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { api } from 'lwc';
import { TARGETS } from '../constants/target';
import { sentenceCase, camelCase } from 'change-case';
import { TYPE_BASICS, TYPE_TARGETS } from '../constants/formEvents';
import FormContent from '../FormContent/FormContent';

export default class FormBasics extends FormContent {
  @api
  basics;

  @api
  targets;

  targetsArr = Object.values(TARGETS);

  onChangeInput(e) {
    const { name, value } = e.currentTarget;
    const formattedValue = this.formatInputValue(name, value);
    const changed = { [name]: formattedValue };
    if (name === 'componentName' && !this.basics.masterLabel) {
      changed.masterLabel = sentenceCase(formattedValue);
    }
    this.updateBasics(changed);
  }

  handleSvgUpload = (e) => {
    const { fileName, fileContent } = e.detail;
    this.updateBasics({ svgFileName: fileName, svgFileContent: fileContent });
  };

  onChangeSelect(e) {
    const { name, value } = e.currentTarget;
    const changed = { [name]: value };
    this.updateBasics(changed);
  }

  onChangeCheckbox(e) {
    const { name, checked } = e.currentTarget;
    const changed = { [name]: checked };
    this.updateBasics(changed);
  }

  onChangeTargetValue(e) {
    if (!e.detail) {
      return;
    }
    const { target, enabled, small, large, headlessAction } = e.detail;
    const t = {
      name: target.name,
      value: target.value,
      enabled
    };
    if (enabled) {
      t.small = small;
      t.large = large;
      t.headlessAction = headlessAction;
    }
    this.updateTargets({
      [target.value]: t
    });
  }

  formatInputValue = (key, value) => {
    if (key === 'componentName') {
      return camelCase(value.replace(/^\d+/, ''));
    }
    return value;
  };

  updateBasics(changed) {
    this.updateForm(TYPE_BASICS, changed);
  }
  updateTargets(changed) {
    this.updateForm(TYPE_TARGETS, changed);
  }
}
