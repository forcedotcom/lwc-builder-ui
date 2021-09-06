/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export function deepCopy(obj) {
  if (Object(obj) !== obj) {
    return obj;
  }
  if (obj instanceof Set) {
    return new Set(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (typeof obj === 'function') {
    return obj.bind({});
  }
  if (Array.isArray(obj)) {
    const obj2 = [];
    const len = obj.length;
    for (let i = 0; i < len; i++) {
      obj2.push(deepCopy(obj[i]));
    }
    return obj2;
  }
  const result = Object.create({});
  let keys = Object.keys(obj);
  if (obj instanceof Error) {
    keys = Object.getOwnPropertyNames(obj);
  }

  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    result[key] = deepCopy(obj[key]);
  }
  return result;
}

export function arraysEqual(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] instanceof Array && array2[index] instanceof Array) {
      if (!arraysEqual(array1[index], array2[index])) {
        return false;
      }
    } else if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

export const ArraySlice = Array.prototype.slice;
