/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import '@lwc/synthetic-shadow';
import { LightningElement, track } from 'lwc';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

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

    const zip = new JSZip();
    zip.file(`${componentName}.js`, js);
    zip.file(`${componentName}.js-meta.xml`, meta);
    if (withHtml) {
      zip.file(`${componentName}.html`, html);
    }
    if (withCss) {
      zip.file(`${componentName}.css`, css);
    }

    if (withSvg) {
      zip.file(`${componentName}.svg`, svg);
    }
    if (withTest) {
      zip.file(`__tests__/${componentName}.test.js`, test);
    }
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, `${componentName}.zip`);
    });
  };

  showPreview = () => {};

  get hasContents() {
    return !!this.contents && !!this.contents.componentName;
  }
}
