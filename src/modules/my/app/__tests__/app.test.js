/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { createElement } from 'lwc';
import MyApp from 'my/app';
import LWCBuilderEvent from 'domain/lwcBuilderEvent';

// Mock vscode API
const mockPostMessage = jest.fn();
window.acquireVsCodeApi = jest.fn(() => {
  return {
    postMessage: mockPostMessage
  };
});

describe('my-app', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('show contents and enables button when component name indicated', () => {
    // GIVEN
    const element = createElement('my-app', {
      is: MyApp
    });
    document.body.appendChild(element);

    // WHEN
    const form = element.shadowRoot.querySelector('my-form');
    form.dispatchEvent(
      new CustomEvent('updatecontent', {
        detail: { componentName: 'MyNewCmp' }
      })
    );

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const preview = element.shadowRoot.querySelector('my-preview');
      const button = element.shadowRoot.querySelector('button:not([disabled])');
      expect(preview).not.toBeNull();
      expect(button).not.toBeNull();
    });
  });

  it("doesn't show contents and disables button when component name not indicated", () => {
    // GIVEN
    const element = createElement('my-app', {
      is: MyApp
    });
    document.body.appendChild(element);

    // WHEN
    const form = element.shadowRoot.querySelector('my-form');
    form.dispatchEvent(new CustomEvent('updatecontent', { detail: {} }));

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const preview = element.shadowRoot.querySelector('my-preview');
      const button = element.shadowRoot.querySelector('button[disabled]');
      expect(preview).toBeNull();
      expect(button).not.toBeNull();
    });
  });

  it('sends message to server when button clicked', () => {
    // GIVEN
    const element = createElement('my-app', {
      is: MyApp
    });

    document.body.appendChild(element);
    const form = element.shadowRoot.querySelector('my-form');
    form.dispatchEvent(
      new CustomEvent('updatecontent', {
        detail: { componentName: 'MyNewCmp' }
      })
    );

    // WHEN
    return Promise.resolve().then(() => {
      const button = element.shadowRoot.querySelector('button:not([disabled])');
      button.click();

      // THEN
      expect(mockPostMessage).toBeCalledWith(
        new LWCBuilderEvent('create_button_clicked', {
          componentName: 'MyNewCmp'
        })
      );
    });
  });
});
