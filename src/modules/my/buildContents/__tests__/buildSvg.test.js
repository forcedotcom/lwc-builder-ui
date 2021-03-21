/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { buildSvg } from '../buildSvg';

describe('my-build-svg', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('svg returns passed in svg when indicated', () => {
    // GIVEN
    const contents = { svgFileContent: 'IAmAnSvg' };

    // WHEN
    const svg = buildSvg(contents);

    // THEN
    expect(svg).toBe(contents.svgFileContent);
  });

  it('svg returns default svg when svg not passed in', () => {
    // GIVEN
    const contents = {};

    // WHEN
    const svg = buildSvg(contents);

    // THEN
    expect(svg).toBe(`<svg viewBox="0 0 64 64">
  <path fill="#00a1e0" d="M23 6h22l-8 18h11L20 58l6-26H16l7-26z"></path>
  <path fill="#032e61" d="M20 60a2 2 0 0 1-1.95-2.45L23.5 34H16a2 2 0 0 1-1.93-2.52l7-26A2 2 0 0 1 23 4h22a2 2 0 0 1 1.83 2.81L40.08 22H48a2 2 0 0 1 1.54 3.27l-28 34A2 2 0 0 1 20 60zm-1.4-30H26a2 2 0 0 1 1.95 2.45l-4.1 17.72L43.76 26H37a2 2 0 0 1-1.83-2.81L41.92 8h-17.4z"></path>
  <path fill="#fff" d="M26 26a2 2 0 0 1-1.93-2.53l3-11a2 2 0 1 1 3.86 1.05l-3 11A2 2 0 0 1 26 26z"></path>
</svg>`);
  });
});
