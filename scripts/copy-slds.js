/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const cpx = require('cpx');
cpx.copy(
  './node_modules/@salesforce-ux/design-system/assets/**/*',
  'src/resources',
  () => {
    console.log('Done copying SLDS resources');
  }
);
