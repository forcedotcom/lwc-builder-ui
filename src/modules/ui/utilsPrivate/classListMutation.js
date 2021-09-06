/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export function classListMutation(classList, config) {
  Object.keys(config).forEach((key) => {
    if (typeof key === 'string' && key.length) {
      if (config[key]) {
        classList.add(key);
      } else {
        classList.remove(key);
      }
    }
  });
}
