/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, track } from 'lwc';
import LWCBuilderEvent from 'domain/lwcBuilderEvent';

export default class App extends LightningElement {
  @track contents;
  vscode;

  connectedCallback() {
    if (typeof acquireVsCodeApi === 'function') {
      this.vscode = acquireVsCodeApi(); // eslint-disable-line
    }
  }

  onUpdateForm(event) {
    this.contents = event.detail;
  }

  onButtonClick() {
    // Send message to server
    const message = new LWCBuilderEvent('create_button_clicked', this.contents);
    console.log(this.contents);
    this.vscode?.postMessage(message);
  }

  get hasContents() {
    return this.contents && this.contents.componentName;
  }
}
