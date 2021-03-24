'use strict';

const lwc = require('@lwc/rollup-plugin');
const replace = require('@rollup/plugin-replace');
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const html = require('./plugin-html');
const cleanup = require('./plugin-cleanup');
const copyAssets = require('./plugin-copy-assets');

const { __PROD__ } = require('./shared');

module.exports = {
  input: {
    main: 'src/index.js'
  },

  preserveEntrySignatures: false,

  output: {
    dir: 'dist',
    entryFileNames: 'entry-[name]-[hash].js',
    format: 'esm',
    sourcemap: true
  },

  manualChunks(id) {
    if (id.includes('node_modules')) {
      return 'vendor';
    }
  },

  plugins: [
    cleanup(),
    html(),
    copyAssets(),
    nodeResolve(),
    lwc({
      exclude: ['**/*.mjs'],
      rootDir: 'src/modules'
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    __PROD__ && terser()
  ]
};
