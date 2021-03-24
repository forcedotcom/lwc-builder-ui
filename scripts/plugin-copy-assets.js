'use strict';

const fs = require('fs-extra');

const ASSETS = {
  'src/resources/favicon.ico': 'resources/favicon.ico',
  'src/resources/lwc.png': 'resources/lwc.png',
  'src/resources/slds.min.css': 'resources/slds.min.css'
};

// Copy the assets to the dist folder.
module.exports = () => ({
  name: 'copy-assets',
  buildStart() {
    for (const src of Object.keys(ASSETS)) {
      this.addWatchFile(src);
    }
  },
  renderStart(options) {
    function copyAssets(config) {
      for (const [src, dest] of Object.entries(config)) {
        fs.copySync(src, `${options.dir}/${dest}`);
      }
    }

    copyAssets(ASSETS);
  }
});
