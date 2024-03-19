/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const html = require('./plugin-html');
const lwc = require('@lwc/rollup-plugin');
const path = require('path');
const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const copy = require('rollup-plugin-copy-glob');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');

const input = path.resolve(process.cwd(), 'src', 'index.js');
const outputDir = path.resolve(process.cwd(), 'dist');
const ASSETS = [{ files: 'src/resources/**', dest: 'dist/resources/' }];

module.exports = () => {
  const isWatch = process.env.ROLLUP_WATCH;
  return {
    input,
    output: {
      file: path.join(outputDir, 'index.js'),
      format: 'esm'
    },
    plugins: [
      html(),
      nodeResolve(),
      lwc({
        rootDir: 'src/modules',
        modules: [{ npm: '@salesforce-ux/design-system' }]
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      copy(ASSETS, { watch: false }),
      isWatch && serve('dist'),
      isWatch && livereload('dist')
    ],
    watch: {
      exclude: ['node_modules/**']
    }
  };
};
