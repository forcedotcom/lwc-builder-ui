/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { buildCss } from '../buildCss';

describe('my-build-css', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('css returns default css', () => {
    // GIVEN
    const contents = {};

    // WHEN
    const css = buildCss(contents);

    // THEN
    expect(css).toBe(`h1 {}`);
  });
});
