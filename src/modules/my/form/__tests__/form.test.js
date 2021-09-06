/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { createElement } from 'lwc';
import MyForm from 'my/form';
import { buildContents } from 'my/buildContents';
// import { sentenceCase, camelCase } from 'change-case';
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

  // TODO: test content changes

  it('updates content when isExposed changed', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
    document.body.appendChild(element);
    const updateChildEvent = jest.fn();
    element.addEventListener('update', updateChildEvent);

    const basics = element.shadowRoot.querySelector('my-form-basics');
    const input = basics.shadowRoot.querySelector('input[name="isExposed"]');
    input.checked = true;
    input.dispatchEvent(new CustomEvent('change'));
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // THEN
      expect(updateChildEvent).toHaveBeenCalled();
      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.isExposed = true;
      expect(buildContents).toBeCalledWith(expectedInputs);
    });
  });
});
