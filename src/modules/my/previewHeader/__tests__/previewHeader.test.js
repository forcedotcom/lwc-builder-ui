/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { createElement } from 'lwc';
import MyPreviewHeader from 'my/previewHeader';

describe('my-preview-header', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('computes correct classes when selected', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });

    // WHEN
    element.type = 'html';
    element.selected = 'html';
    document.body.appendChild(element);

    // THEN
    const tagClassList = [
      'preview-header',
      'slds-vertical-tabs__nav-item',
      'slds-is-active'
    ];
    const li = element.shadowRoot.querySelector('li');
    tagClassList.forEach((cls) => {
      expect(li.classList.contains(cls)).toBe(true);
    });
  });

  it('computes correct classes when not selected', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });

    // WHEN
    element.type = 'html';
    element.selected = 'js';
    document.body.appendChild(element);

    // THEN
    const tagClassList = ['preview-header', 'slds-vertical-tabs__nav-item'];
    const li = element.shadowRoot.querySelector('li');
    tagClassList.forEach((cls) => {
      expect(li.classList.contains(cls)).toBe(true);
    });
  });

  it('computes correct filename when prefix', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });

    // WHEN
    element.prefix = 'prefix';
    element.filename = 'MyLWC';
    element.extension = 'html';
    document.body.appendChild(element);

    // THEN
    const li = element.shadowRoot.querySelector('li');
    expect(li.title).toContain('prefixMyLWC.html');
  });

  it('computes correct filename when no prefix', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });

    // WHEN
    element.filename = 'MyLWC';
    element.extension = 'html';
    document.body.appendChild(element);

    // THEN
    const li = element.shadowRoot.querySelector('li');
    expect(li.title).toContain('MyLWC.html');
  });

  it('computes correct tab index when selected', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });

    // WHEN
    element.type = 'html';
    element.selected = 'html';
    document.body.appendChild(element);

    // THEN
    const a = element.shadowRoot.querySelector('a');
    expect(a.tabIndex).toBe(0);
  });

  it('computes correct tab index when not selected', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });

    // WHEN
    element.type = 'html';
    element.selected = 'js';
    document.body.appendChild(element);

    // THEN
    const a = element.shadowRoot.querySelector('a');
    expect(a.tabIndex).toBe(-1);
  });

  it('computes correct isSelected when selected', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });

    // WHEN
    element.type = 'html';
    element.selected = 'html';
    document.body.appendChild(element);

    // THEN
    const a = element.shadowRoot.querySelector('a');
    expect(a.ariaSelected).toBe('true');
  });

  it('computes correct isSelected when not selected', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });

    // WHEN
    element.type = 'html';
    element.selected = 'js';
    document.body.appendChild(element);

    // THEN
    const a = element.shadowRoot.querySelector('a');
    expect(a.ariaSelected).toBe('false');
  });

  it('fires click tab event when a clicked', () => {
    // GIVEN
    const element = createElement('my-preview-header', {
      is: MyPreviewHeader
    });
    const eventListener = jest.fn();
    element.addEventListener('clicktab', eventListener);
    document.body.appendChild(element);

    // WHEN
    const a = element.shadowRoot.querySelector('a');
    a.click();

    // THEN
    expect(eventListener).toHaveBeenCalled();
  });
});
