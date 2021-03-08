/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { buildHtml } from './buildHtml';
import { buildJs } from './buildJs';
import { buildMeta } from './buildMeta';
import { buildCss } from './buildCss';
import { buildSvg } from './buildSvg';
import { buildTest } from './buildTest';

export const buildContents = (contents) => {
  const html = buildHtml(contents);
  const js = buildJs(contents);
  const css = buildCss(contents);
  const svg = buildSvg(contents);
  const meta = buildMeta(contents);
  const test = buildTest(contents);
  return { ...contents, html, js, css, meta, svg, test };
};
