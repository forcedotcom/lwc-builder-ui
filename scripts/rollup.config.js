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
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
import copy from 'rollup-plugin-copy-glob';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const input = path.resolve(process.cwd(), 'src', 'index.js');
const outputDir = path.resolve(process.cwd(), 'dist');
const ASSETS = [{ files: 'src/resources/**', dest: 'dist/resources/' }];

module.exports = () => {
  const isProduction = process.env.NODE_ENV === 'production';
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
        rootDir: 'src/modules'
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      copy(ASSETS, { watch: false }),
      isProduction && terser(),
      isWatch && serve('dist'),
      isWatch && livereload('dist')
    ],
    watch: {
      exclude: ['node_modules/**']
    }
  };
};
