/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { timeout, animationFrame } from 'ui/utilsPrivate';

const DELAY_TIMEOUT = 200;
export class LightningResizeObserver {
  constructor(resizeCallback) {
    this._resizeObserverAvailable = typeof ResizeObserver === 'function';

    const delayedCallback = (callback) => {
      if (this._running) {
        return;
      }
      this._running = true;

      timeout(DELAY_TIMEOUT)
        .then(() => animationFrame())
        .then(() => {
          callback();
          this._running = false;
        });
    };
    this._delayedResizeCallback = delayedCallback.bind(this, resizeCallback);

    if (this._resizeObserverAvailable) {
      this._resizeObserver = new ResizeObserver(this._delayedResizeCallback);
    }
  }

  observe(lightningElement) {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this._requestAnimationId = requestAnimationFrame(() => {
      if (this._resizeObserverAvailable) {
        this._resizeObserver.observe(lightningElement);
      } else if (!this._hasWindowResizeHandler) {
        window.addEventListener('resize', this._delayedResizeCallback);
        this._hasWindowResizeHandler = true;
      }
    });
  }

  disconnect() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
    if (this._requestAnimationId) {
      cancelAnimationFrame(this._requestAnimationId);
    }
    window.removeEventListener('resize', this._delayedResizeCallback);
    this._hasWindowResizeHandler = false;
  }
}
