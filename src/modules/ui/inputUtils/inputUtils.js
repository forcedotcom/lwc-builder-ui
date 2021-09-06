/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export { generateUniqueId } from './idGenerator';
export { InteractingState, debounce } from './interacting';
export { normalizeVariant, VARIANT } from './normalize';

export function isEmptyString(s) {
  return (
    s === undefined || s === null || (typeof s === 'string' && s.trim() === '')
  );
}
