/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export const isIE11 = isIE11Test(navigator);
export const isChrome = isChromeTest(navigator);
export const isSafari = isSafariTest(navigator);

export function isIE11Test(navigator) {
  return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
}

export function isChromeTest(navigator) {
  return (
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  );
}

export function isSafariTest(navigator) {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
