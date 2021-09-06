/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {
  MODULE_NAVIGATION_MIXIN_NAVIGATE,
  MODULE_NAVIGATION_MIXIN_GENERATE_URL,
  MODULE_TOAST
} from '../constants/modules';

export const buildImportsForJs = (modules) => {
  return Object.values(modules)
    .filter((m) => m.checked)
    .map((m) => {
      switch (m.value) {
        case MODULE_TOAST.value:
          return `import { ShowToastEvent } from 'lightning/platformShowToastEvent';`;
        case MODULE_NAVIGATION_MIXIN_NAVIGATE.value:
        case MODULE_NAVIGATION_MIXIN_GENERATE_URL.value:
          return `import { NavigationMixin } from 'lightning/navigation';`;
        default:
          return null;
      }
    })
    .filter((m, index, self) => !!m && self.indexOf(m) === index);
};
