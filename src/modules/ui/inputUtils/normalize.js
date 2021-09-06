/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { normalizeString } from 'ui/utilsPrivate';

export const VARIANT = {
  STANDARD: 'standard',
  LABEL_HIDDEN: 'label-hidden',
  LABEL_STACKED: 'label-stacked',
  LABEL_INLINE: 'label-inline'
};

export function normalizeVariant(value) {
  return normalizeString(value, {
    fallbackValue: VARIANT.STANDARD,
    validValues: [
      VARIANT.STANDARD,
      VARIANT.LABEL_HIDDEN,
      VARIANT.LABEL_STACKED,
      VARIANT.LABEL_INLINE
    ]
  });
}
