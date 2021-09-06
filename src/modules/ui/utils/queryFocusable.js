/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const inputableNode = /input|select|textarea|button|object/;

function visible(element) {
  const { width, height } = element.getBoundingClientRect();
  const noZeroSize = width > 0 || height > 0;
  return noZeroSize && window.getComputedStyle(element).visibility !== 'hidden';
}

function focusable(element) {
  const nodeName = element.tagName.toLowerCase();
  const res =
    (inputableNode.test(nodeName) && !element.disabled) ||
    (nodeName === 'a' && element.href);

  return res && visible(element);
}

function tabbable(element) {
  const isDataActionable = element.getAttribute('data-navigation') === 'enable';
  const tabIndex = element.tabIndex;
  return (tabIndex >= 0 && focusable(element)) || isDataActionable;
}

export function queryFocusable(element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter(tabbable);
}
