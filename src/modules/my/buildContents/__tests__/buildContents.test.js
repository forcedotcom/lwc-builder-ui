/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { buildContents } from '../buildContents';

jest.mock('../buildCss', () => ({ buildCss: jest.fn(() => 'css') }));
jest.mock('../buildHtml', () => ({ buildHtml: jest.fn(() => 'html') }));
jest.mock('../buildJs', () => ({ buildJs: jest.fn(() => 'js') }));
jest.mock('../buildMeta', () => ({ buildMeta: jest.fn(() => 'meta') }));
jest.mock('../buildSvg', () => ({ buildSvg: jest.fn(() => 'svg') }));
jest.mock('../buildTest', () => ({ buildTest: jest.fn(() => 'test') }));

describe('my-build-contents', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('build calls all build functions', () => {
    // GIVEN
    const contents = {};

    // WHEN
    const result = buildContents(contents);

    // THEN
    expect(result).toMatchObject({
      ...contents,
      html: 'html',
      js: 'js',
      css: 'css',
      meta: 'meta',
      svg: 'svg',
      test: 'test'
    });
  });
});
