/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const proto = {
  add(className) {
    if (typeof className === 'string') {
      this[className] = true;
    } else {
      Object.assign(this, className);
    }
    return this;
  },
  invert() {
    Object.keys(this).forEach((key) => {
      this[key] = !this[key];
    });
    return this;
  },
  toString() {
    return Object.keys(this)
      .filter((key) => this[key])
      .join(' ');
  }
};

export function classSet(config) {
  if (typeof config === 'string') {
    const key = config;
    config = {};
    config[key] = true;
  }
  return Object.assign(Object.create(proto), config);
}
