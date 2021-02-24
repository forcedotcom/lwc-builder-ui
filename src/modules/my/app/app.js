/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import '@lwc/synthetic-shadow';
import { LightningElement, track } from 'lwc';
import LWCBuilderEvent from '../../domain/LWCBuilderEvent';

export default class App extends LightningElement {
  @track contents;
  vscode;

  connectedCallback() {
    this.vscode = acquireVsCodeApi(); // eslint-disable-line
  }

  onUpdateForm = (e) => {
    this.contents = e.detail;
  };

  generate = () => {
    // Send message to server
    const message = new LWCBuilderEvent('create_button_clicked', this.contents);

    this.vscode.postMessage(message);
    console.log(this.contents);
    const {
      withCss,
      withHtml,
      withSvg,
      withTest,
      html,
      js,
      meta,
      css,
      svg,
      test,
      componentName
    } = this.contents;

    console.log(
      withCss,
      withHtml,
      withSvg,
      withTest,
      html,
      js,
      meta,
      css,
      svg,
      test,
      componentName
    );

    // TODO: Bundle files here
  };

  showPreview = () => {};

  get hasContents() {
    return !!this.contents && !!this.contents.componentName;
  }
}
