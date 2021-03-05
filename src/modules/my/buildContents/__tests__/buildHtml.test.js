/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { buildHtml } from '../buildHtml';

describe('my-build-html', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('html includes component name', () => {
    // GIVEN
    const contents = { componentName: 'MyLWC' };

    // WHEN
    const html = buildHtml(contents);

    // THEN
    expect(html).toBe(`<template>
    <h1>${contents.componentName}</h1>
</template>`);
  });
});
