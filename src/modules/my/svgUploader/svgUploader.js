/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, api } from 'lwc';

export default class SvgUploader extends LightningElement {
  static MAX_SIZE = 200000;

  @api
  fileName;

  @api
  fileContent;

  discardSvg = () => {
    this.dispatchEvent(
      new CustomEvent('uploadsvg', {
        detail: {
          fileName: '',
          fileContent: ''
        }
      })
    );
  };

  get showOutputClass() {
    return this.fileName ? 'output show' : 'output';
  }
  get showInputClass() {
    return this.fileName ? 'input' : 'input show';
  }

  loadSvgFile = (e) => {
    const file = e.currentTarget.files[0];
    if (file && file.size < SvgUploader.MAX_SIZE) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (re) => {
        if (re.target.result) {
          this.dispatchEvent(
            new CustomEvent('uploadsvg', {
              detail: {
                fileName: file.name,
                fileContent: re.target.result
              }
            })
          );
        }
      };
      reader.onerror = (re) => {
        console.error(re);
      };
      e.currentTarget.type = 'text';
      e.currentTarget.type = 'file';
    }
  };
}
