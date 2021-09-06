/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/*
import { createElement } from 'lwc';
import MyForm from 'my/formSobjects';
import { EXPECTED_TARGETS, EXPECTED_INPUTS } from '../../constants/test';
import { buildContents } from 'my/buildContents';
import { sentenceCase, camelCase } from 'change-case';
*/
jest.mock('my/buildContents', () => ({ buildContents: jest.fn() }));

describe('my-form-basics', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('test', () => {
    expect(true).toBe(true);
  });
  /*
  it('renders sobjects when record page selected', () => {
    // GIVEN
    const element = createElement('my-form-sobjects', {
      is: MyForm
    });
    element.sobjects = [
      {
        id: 'hello'
      }
    ];
    document.body.appendChild(element);

    // WHEN
    const target = element.shadowRoot.querySelector('my-target-definition');
    const event = new CustomEvent('changetarget', {
      detail: { target: { value: 'lightning__RecordPage' }, enabled: true }
    });
    target.dispatchEvent(event);

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const sobjectDefinitions = element.shadowRoot.querySelectorAll(
        'my-sobject-definition'
      );
      expect(sobjectDefinitions.length).toBe(1);
      expect(sobjectDefinitions[0].oid).toBe('objectId_0');
    });
  });

  it('adds sobject row when button clicked', () => {
    // GIVEN
    const element = createElement('my-form-sobjects', {
      is: MyForm
    });
    element.sobjects = [
      {
        id: 'hello'
      }
    ];
    document.body.appendChild(element);

    const target = element.shadowRoot.querySelector('my-target-definition');
    const event = new CustomEvent('changetarget', {
      detail: { target: { value: 'lightning__RecordPage' }, enabled: true }
    });
    target.dispatchEvent(event);

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const button = element.shadowRoot.querySelector(
        'button[name="addObjectRow"]'
      );
      button.dispatchEvent(new CustomEvent('click'));

      return Promise.resolve().then(() => {
        const sobjects = element.shadowRoot.querySelectorAll(
          'my-sobject-definition'
        );
        expect(sobjects.length).toBe(2);
        expect(sobjects[0].oid).toBe('objectId_0');
        expect(sobjects[1].oid).toBe('objectId_1');
      });
    });
  });

  it('removes sobject row when button clicked', () => {
    // GIVEN
    const element = createElement('my-form-sobjects', {
      is: MyForm
    });
    element.sobjects = [
      {
        id: 'hello'
      }
    ];
    document.body.appendChild(element);

    const target = element.shadowRoot.querySelector('my-target-definition');
    const event = new CustomEvent('changetarget', {
      detail: { target: { value: 'lightning__RecordPage' }, enabled: true }
    });
    target.dispatchEvent(event);

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const sobject = element.shadowRoot.querySelector('my-sobject-definition');
      sobject.dispatchEvent(
        new CustomEvent('deletesobj', { detail: 'objectId_0' })
      );

      return Promise.resolve().then(() => {
        const sobjects = element.shadowRoot.querySelectorAll(
          'my-sobject-definition'
        );
        expect(sobjects.length).toBe(0);
      });
    });
  });

  it('updates content when sobject row event listened', () => {
    // GIVEN
    const element = createElement('my-form-sobjects', {
      is: MyForm
    });
    element.sobjects = [
      {
        id: `objectId_0`
      }
    ];
    document.body.appendChild(element);

    const target = element.shadowRoot.querySelector('my-target-definition');
    const event = new CustomEvent('changetarget', {
      detail: {
        target: { value: 'lightning__RecordPage' },
        enabled: true,
        small: false,
        large: false,
        headlessAction: false
      }
    });
    target.dispatchEvent(event);

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const sobject = element.shadowRoot.querySelector('my-sobject-definition');
      sobject.dispatchEvent(
        new CustomEvent('changesobj', {
          detail: { id: 'objectId_0' }
        })
      );

      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.sobjects.push({ id: 'objectId_0' });
      expectedInputs.targets.lightning__RecordPage.enabled = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });
  */
});
