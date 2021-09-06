/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export function raf(fn) {
  let ticking = false;
  return function (event) {
    if (!ticking) {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      requestAnimationFrame(() => {
        fn.call(this, event);
        ticking = false;
      });
    }
    ticking = true;
  };
}
