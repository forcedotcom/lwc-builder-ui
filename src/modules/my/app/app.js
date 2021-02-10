/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import '@lwc/synthetic-shadow';
import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
  @track
  contents;

  onUpdateForm = (e) => {
    this.contents = e.detail;
  };

  generate = () => {
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
