/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { LightningElement, api, track } from 'lwc';
import { normalizeBoolean } from 'ui/utilsPrivate';

export default class Tab extends LightningElement {
  @track _loadContent = false;

  connectedCallback() {
    this._connected = true;

    this.dispatchEvent(
      new CustomEvent('privatetabregister', {
        cancelable: true,
        bubbles: true,
        composed: true,
        detail: {
          setDeRegistrationCallback: (deRegistrationCallback) => {
            this._deRegistrationCallback = deRegistrationCallback;
          }
        }
      })
    );
  }

  @api
  loadContent() {
    this._loadContent = true;

    this.dispatchEvent(new CustomEvent('active'));
  }

  disconnectedCallback() {
    this._connected = false;

    if (this._deRegistrationCallback) {
      this._deRegistrationCallback();
    }
  }

  @api get active() {
    return this._active;
  }

  set active(newValue) {
    this._active = newValue;
    this._dispatchDataChangeEventIfConnected();
  }

  @api get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = String(newValue);
    this._dispatchDataChangeEventIfConnected();
  }

  @api get label() {
    return this._label;
  }

  set label(value) {
    this._label = value;
    this._dispatchDataChangeEventIfConnected();
  }

  @api get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
    this._dispatchDataChangeEventIfConnected();
  }

  @api get iconName() {
    return this._iconName;
  }

  set iconName(value) {
    this._iconName = value;
    this._dispatchDataChangeEventIfConnected();
  }

  @api get iconAssistiveText() {
    return this._iconAlernativeText;
  }

  set iconAssistiveText(value) {
    this._iconAlernativeText = value;
    this._dispatchDataChangeEventIfConnected();
  }

  @api get endIconName() {
    return this._endIconName;
  }

  set endIconName(value) {
    this._endIconName = value;
    this._dispatchDataChangeEventIfConnected();
  }

  @api get endIconAlternativeText() {
    return this._endIconAlternativeText;
  }

  set endIconAlternativeText(value) {
    this._endIconAlternativeText = value;
    this._dispatchDataChangeEventIfConnected();
  }

  @api get showErrorIndicator() {
    return this._showErrorIndicator;
  }

  set showErrorIndicator(value) {
    this._showErrorIndicator = normalizeBoolean(value);
    this._dispatchDataChangeEventIfConnected();
  }

  _dispatchDataChangeEventIfConnected() {
    if (this._connected) {
      this.dispatchEvent(
        new CustomEvent('privatetabdatachange', {
          cancelable: true,
          bubbles: true,
          composed: true
        })
      );
    }
  }
}
