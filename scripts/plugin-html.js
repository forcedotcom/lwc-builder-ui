/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const fs = require('fs');

module.exports = () => ({
  name: 'html',
  buildStart() {
    this.addWatchFile('src/index.html');
  },
  generateBundle() {
    let source = fs.readFileSync('src/index.html', 'utf-8');

    this.emitFile({
      type: 'asset',
      source,
      name: 'HTML Asset',
      fileName: 'index.html'
    });
  }
});
