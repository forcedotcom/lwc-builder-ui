/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { createElement } from 'lwc';
import MyPreview from 'my/preview';

describe('my-preview', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('shows html preview header when withHtml', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withHtml: true, componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.html-header'
    );

    // THEN
    expect(previewHeader.type).toBe('html');
    expect(previewHeader.filename).toBe(element.contents.componentName);
  });

  it('always shows js preview header', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.js-header'
    );

    // THEN
    expect(previewHeader.type).toBe('js');
    expect(previewHeader.filename).toBe(element.contents.componentName);
  });

  it('always shows meta preview header', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.meta-header'
    );

    // THEN
    expect(previewHeader.type).toBe('meta');
    expect(previewHeader.filename).toBe(element.contents.componentName);
  });

  it('shows css preview header when withCss', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withCss: true, componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.css-header'
    );

    // THEN
    expect(previewHeader.type).toBe('css');
    expect(previewHeader.filename).toBe(element.contents.componentName);
  });

  it('shows svg preview header when withSvg', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withSvg: true, componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.svg-header'
    );

    // THEN
    expect(previewHeader.type).toBe('svg');
    expect(previewHeader.filename).toBe(element.contents.componentName);
  });

  it('shows test preview header when withTest', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withTest: true, componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.test-header'
    );

    // THEN
    expect(previewHeader.type).toBe('test');
    expect(previewHeader.filename).toBe(element.contents.componentName);
  });

  it('shows html preview content when withHtml', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withHtml: true, componentName: 'MyLWC', html: 'html' };
    document.body.appendChild(element);

    // WHEN
    const previewContent = element.shadowRoot.querySelector(
      'my-preview-content.html'
    );

    // THEN
    expect(previewContent.type).toBe('html');
    expect(previewContent.filename).toBe(element.contents.componentName);
    expect(previewContent.content).toBe(element.contents.html);
  });

  it('always shows js preview content', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { componentName: 'MyLWC', js: 'js' };
    document.body.appendChild(element);

    // WHEN
    const previewContent = element.shadowRoot.querySelector(
      'my-preview-content.js'
    );

    // THEN
    expect(previewContent.type).toBe('js');
    expect(previewContent.filename).toBe(element.contents.componentName);
    expect(previewContent.content).toBe(element.contents.js);
  });

  it('always shows meta preview content', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { componentName: 'MyLWC', meta: 'meta' };
    document.body.appendChild(element);

    // WHEN
    const previewContent = element.shadowRoot.querySelector(
      'my-preview-content.meta'
    );

    // THEN
    expect(previewContent.type).toBe('meta');
    expect(previewContent.filename).toBe(element.contents.componentName);
    expect(previewContent.content).toBe(element.contents.meta);
  });

  it('shows css preview content when withCss', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withCss: true, componentName: 'MyLWC', css: 'css' };
    document.body.appendChild(element);

    // WHEN
    const previewContent = element.shadowRoot.querySelector(
      'my-preview-content.css'
    );

    // THEN
    expect(previewContent.type).toBe('css');
    expect(previewContent.filename).toBe(element.contents.componentName);
    expect(previewContent.content).toBe(element.contents.css);
  });

  it('shows svg preview content when withSvg', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withSvg: true, componentName: 'MyLWC', svg: 'svg' };
    document.body.appendChild(element);

    // WHEN
    const previewContent = element.shadowRoot.querySelector(
      'my-preview-content.svg'
    );

    // THEN
    expect(previewContent.type).toBe('svg');
    expect(previewContent.filename).toBe(element.contents.componentName);
    expect(previewContent.content).toBe(element.contents.svg);
  });

  it('shows test preview content when withTest', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withTest: true, componentName: 'MyLWC', test: 'test' };
    document.body.appendChild(element);

    // WHEN
    const previewContent = element.shadowRoot.querySelector(
      'my-preview-content.test'
    );

    // THEN
    expect(previewContent.type).toBe('test');
    expect(previewContent.filename).toBe(element.contents.componentName);
    expect(previewContent.content).toBe(element.contents.test);
  });

  it('shows html content when click on html header', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withHtml: true, componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.html-header'
    );
    previewHeader.dispatchEvent(new CustomEvent('clicktab'));

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const previewContent = element.shadowRoot.querySelector(
        'my-preview-content.html'
      );
      expect(previewContent.classList.contains('preview-content')).toBe(true);
      expect(previewContent.classList.contains('selected')).toBe(true);
    });
  });

  it('shows js content when click on js header', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.js-header'
    );
    previewHeader.dispatchEvent(new CustomEvent('clicktab'));

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const previewContent = element.shadowRoot.querySelector(
        'my-preview-content.js'
      );
      expect(previewContent.classList.contains('preview-content')).toBe(true);
      expect(previewContent.classList.contains('selected')).toBe(true);
    });
  });

  it('shows meta content when click on meta header', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.meta-header'
    );
    previewHeader.dispatchEvent(new CustomEvent('clicktab'));

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const previewContent = element.shadowRoot.querySelector(
        'my-preview-content.meta'
      );
      expect(previewContent.classList.contains('preview-content')).toBe(true);
      expect(previewContent.classList.contains('selected')).toBe(true);
    });
  });

  it('shows css content when click on css header', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withCss: true, componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.css-header'
    );
    previewHeader.dispatchEvent(new CustomEvent('clicktab'));

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const previewContent = element.shadowRoot.querySelector(
        'my-preview-content.css'
      );
      expect(previewContent.classList.contains('preview-content')).toBe(true);
      expect(previewContent.classList.contains('selected')).toBe(true);
    });
  });

  it('shows svg content when click on svg header', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withSvg: true, componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.svg-header'
    );
    previewHeader.dispatchEvent(new CustomEvent('clicktab'));

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const previewContent = element.shadowRoot.querySelector(
        'my-preview-content.svg'
      );
      expect(previewContent.classList.contains('preview-content')).toBe(true);
      expect(previewContent.classList.contains('selected')).toBe(true);
    });
  });

  it('shows test content when click on test header', () => {
    // GIVEN
    const element = createElement('my-preview', {
      is: MyPreview
    });
    element.contents = { withTest: true, componentName: 'MyLWC' };
    document.body.appendChild(element);

    // WHEN
    const previewHeader = element.shadowRoot.querySelector(
      'my-preview-header.test-header'
    );
    previewHeader.dispatchEvent(new CustomEvent('clicktab'));

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const previewContent = element.shadowRoot.querySelector(
        'my-preview-content.test'
      );
      expect(previewContent.classList.contains('preview-content')).toBe(true);
      expect(previewContent.classList.contains('selected')).toBe(true);
    });
  });
});
