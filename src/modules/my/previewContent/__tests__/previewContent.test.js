/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { createElement } from 'lwc';
import MyPreviewContent from 'my/previewContent';

describe('my-preview-content', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('computes correct classes when selected', () => {
    // GIVEN
    const element = createElement('my-preview-content', {
      is: MyPreviewContent
    });

    // WHEN
    element.type = 'html';
    element.selected = 'html';
    document.body.appendChild(element);

    // THEN
    const tagClassList = [
      'slds-vertical-tabs__content',
      'preview-content-wrapper',
      'slds-show'
    ];
    const div = element.shadowRoot.querySelector('div');
    tagClassList.forEach((cls) => {
      expect(div.classList.contains(cls)).toBe(true);
    });
  });

  it('computes correct classes when not selected', () => {
    // GIVEN
    const element = createElement('my-preview-content', {
      is: MyPreviewContent
    });

    // WHEN
    element.type = 'html';
    element.selected = 'js';
    document.body.appendChild(element);

    // THEN
    const tagClassList = [
      'slds-vertical-tabs__content',
      'preview-content-wrapper'
    ];
    const div = element.shadowRoot.querySelector('div');
    tagClassList.forEach((cls) => {
      expect(div.classList.contains(cls)).toBe(true);
    });
  });

  it('computes correct filename when prefix', () => {
    // GIVEN
    const element = createElement('my-preview-content', {
      is: MyPreviewContent
    });

    // WHEN
    element.prefix = 'prefix';
    element.filename = 'MyLWC';
    element.extension = 'html';
    document.body.appendChild(element);

    // THEN
    const div = element.shadowRoot.querySelector('div');
    expect(div.id).toContain('prefixMyLWC.html');
  });

  it('computes correct filename when no prefix', () => {
    // GIVEN
    const element = createElement('my-preview-content', {
      is: MyPreviewContent
    });

    // WHEN
    element.filename = 'MyLWC';
    element.extension = 'html';
    document.body.appendChild(element);

    // THEN
    const div = element.shadowRoot.querySelector('div');
    expect(div.id).toContain('MyLWC.html');
  });
});
