/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { LightningElement, api } from 'lwc';
import { classSet } from 'ui/utils';
import { normalizeString as normalize } from 'ui/utilsPrivate';

export default class cSpinner extends LightningElement {
  @api alternativeText;

  @api size = 'medium';

  @api variant;

  connectedCallback() {
    this.classList.add('slds-spinner_container');
    this.template.addEventListener('mousewheel', this.stopScrolling);
    this.template.addEventListener('touchmove', this.stopScrolling);
  }

  get normalizedVariant() {
    return normalize(this.variant, {
      fallbackValue: 'base',
      validValues: ['base', 'brand', 'inverse']
    });
  }

  get normalizedSize() {
    return normalize(this.size, {
      fallbackValue: 'medium',
      validValues: ['small', 'medium', 'large']
    });
  }

  get computedClass() {
    const { normalizedVariant, normalizedSize } = this;
    const classes = classSet('slds-spinner');

    if (normalizedVariant !== 'base') {
      classes.add(`slds-spinner_${normalizedVariant}`);
    }

    classes.add(`slds-spinner_${normalizedSize}`);

    return classes.toString();
  }

  get validAlternativeText() {
    const hasAlternativeText = !!this.alternativeText;

    if (!hasAlternativeText) {
      // eslint-disable-next-line no-console
      console.warn(
        `<c-spinner> The alternativeText attribute should not be empty. Please add a description of what is causing the wait.`
      );
    }

    return hasAlternativeText;
  }

  stopScrolling(event) {
    event.preventDefault();
  }
}
