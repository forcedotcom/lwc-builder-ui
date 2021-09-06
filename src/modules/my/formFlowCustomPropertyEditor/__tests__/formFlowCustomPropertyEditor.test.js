/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { createElement } from 'lwc';
import MyForm from 'my/FormFlowCustomPropertyEditor';
/*
import { buildContents } from 'my/buildContents';
import { sentenceCase, camelCase } from 'change-case';
*/
import { EXPECTED_TARGETS, EXPECTED_INPUTS } from '../../constants/test';
jest.mock('my/buildContents', () => ({ buildContents: jest.fn() }));

EXPECTED_TARGETS.forEach((t) => {
  EXPECTED_INPUTS.targets[t.value] = {
    name: t.name,
    value: t.value,
    enabled: false,
    small: false,
    large: false,
    headlessAction: false,
    properties: [],
    sobjects: []
  };
});

describe('my-form', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('updates content when config editor input changed', () => {
    // GIVEN
    const element = createElement('my-form-flow-custom-property-editor', {
      is: MyForm
    });
    element.customPropertyEditor = {};
    document.body.appendChild(element);

    const COMP_NAME = 'MyFlowCmp';
    const updateHandler = jest.fn();
    element.addEventListener('update', updateHandler);
    const input = element.shadowRoot.querySelector(
      'input[name="customPropertyEditor"]'
    );
    input.value = COMP_NAME;
    input.dispatchEvent(new CustomEvent('change'));

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // THEN
      expect(updateHandler).toHaveBeenCalled();
    });
  });
});
