/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export function formatLabel(str) {
  const args = Array.prototype.slice.call(arguments, 1);
  let replacements = args;
  if (Array.isArray(args[0])) {
    [replacements] = args;
  }

  return str.replace(/{(\d+)}/g, (match, i) => {
    return replacements[i];
  });
}
