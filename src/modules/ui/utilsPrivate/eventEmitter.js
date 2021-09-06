/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export class EventEmitter {
  constructor() {
    this.registry = {};
  }

  on(name, listener) {
    this.registry[name] = this.registry[name] || [];
    this.registry[name].push(listener);
    return this;
  }

  once(name, listener) {
    const doOnce = function () {
      listener.apply(null, arguments);
      this.removeListener(name, doOnce);
    }.bind(this);
    this.on(name, doOnce);
    return this;
  }

  emit(name) {
    const args = Array.prototype.slice.call(arguments, 1);
    const listeners = this.registry[name];
    let count = 0;

    if (listeners) {
      listeners.forEach((listener) => {
        count += 1;
        listener.apply(null, args);
      });
    }
    return count > 0;
  }

  removeListener(name, listener) {
    const listeners = this.registry[name];
    if (listeners) {
      for (let i = 0, len = listeners.length; i < len; i += 1) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          return this;
        }
      }
    }
    return this;
  }
}
