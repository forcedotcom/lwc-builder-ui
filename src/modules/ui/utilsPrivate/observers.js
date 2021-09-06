/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const POSITION_CHANGE_THRESHOLD = 5;
export function observePosition(
  target,
  threshold = POSITION_CHANGE_THRESHOLD,
  originalRect,
  callback
) {
  const newBoundingRect = target.getBoundingClientRect();
  const newLeft = newBoundingRect.left;
  const newTop = newBoundingRect.top;

  const oldLeft = originalRect.left;
  const oldTop = originalRect.top;

  const horizontalShiftDelta = Math.abs(newLeft - oldLeft);
  const verticalShiftDelta = Math.abs(newTop - oldTop);

  if (horizontalShiftDelta >= threshold || verticalShiftDelta >= threshold) {
    callback();
  }
}
