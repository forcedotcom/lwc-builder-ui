/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { keyCodes } from 'ui/utilsPrivate';

function preventDefaultAndStopPropagation(event) {
  event.preventDefault();
  event.stopPropagation();
}

export function handleKeyDownOnTabList(
  event,
  currentFocusedIndex,
  tabsetInterface
) {
  switch (event.keyCode) {
    case keyCodes.left:
    case keyCodes.right:
    case keyCodes.down:
    case keyCodes.up: {
      const isArrowUp = event.keyCode === keyCodes.up;
      const isArrowDown = event.keyCode === keyCodes.down;
      const isArrowLeft = event.keyCode === keyCodes.left;
      const isArrowRight = event.keyCode === keyCodes.right;
      const verticalNavigation =
        tabsetInterface.isVerticalOrientation() && (isArrowUp || isArrowDown);
      const horizontalNavigation =
        !tabsetInterface.isVerticalOrientation() &&
        (isArrowLeft || isArrowRight);
      if (verticalNavigation || horizontalNavigation) {
        preventDefaultAndStopPropagation(event);
        const increment = isArrowLeft || isArrowUp ? -1 : 1;
        let newIndex = currentFocusedIndex + increment;
        if (newIndex < 0) {
          newIndex = tabsetInterface.totalTabs() - 1;
        }
        if (newIndex + 1 > tabsetInterface.totalTabs()) {
          newIndex = 0;
        }
        tabsetInterface.selectTabIndex(newIndex);
      }
      break;
    }
    default:
      break;
  }
}
