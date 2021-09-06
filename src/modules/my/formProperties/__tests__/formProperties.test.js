/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/*
import { createElement } from 'lwc';
import MyForm from 'my/formProperties';
import { buildContents } from 'my/buildContents';
import { sentenceCase, camelCase } from 'change-case';
import { EXPECTED_TARGETS, EXPECTED_INPUTS } from '../../constants/test';
*/
jest.mock('my/buildContents', () => ({ buildContents: jest.fn() }));

describe('my-form-properties', () => {
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
  it('adds property row when button clicked', () => {
    // GIVEN
    const element = createElement('my-form-properties', {
      is: MyForm
    });
    element.properties = [{ id: 'propertyId_0' }];
    document.body.appendChild(element);

    console.log(element.shadowRoot.innerHTML);
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
        'button[name="addPropertyRow"]'
      );
      button.dispatchEvent(new CustomEvent('click'));

      return Promise.resolve().then(() => {
        const propertyDefinitions = element.shadowRoot.querySelectorAll(
          'my-property-definition'
        );
        expect(propertyDefinitions.length).toBe(2);
        expect(propertyDefinitions[0].pid).toBe('propertyId_0');
        expect(propertyDefinitions[1].pid).toBe('propertyId_1');
      });
    });
  });

  it('removes property row when button clicked', () => {
    // GIVEN
    const element = createElement('my-form-properties', {
      is: MyForm
    });
    element.properties = [{ id: 'propertyId_0' }];
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
      const propertyDefinition = element.shadowRoot.querySelector(
        'my-property-definition'
      );
      propertyDefinition.dispatchEvent(
        new CustomEvent('deletepropdef', { detail: 'propertyId_0' })
      );

      return Promise.resolve().then(() => {
        const propertyDefinitions = element.shadowRoot.querySelectorAll(
          'my-property-definition'
        );
        expect(propertyDefinitions.length).toBe(0);
      });
    });
  });

  it('updates content when property row event listened', () => {
    // GIVEN
    const element = createElement('my-form-properties', {
      is: MyForm
    });
    element.properties = [{ id: 'propertyId_0' }];
    document.body.appendChild(element);

    const target = element.shadowRoot.querySelector('my-target-definition');
    const event = new CustomEvent('changetarget', {
      detail: {
        target: { value: 'lightning__RecordPage' },
        enabled: true,
        small: true,
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
      const propertyDefinition = element.shadowRoot.querySelector(
        'my-property-definition'
      );
      propertyDefinition.dispatchEvent(
        new CustomEvent('changepropdef', {
          detail: { id: 'propertyId_0' }
        })
      );

      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.properties.push({ id: 'propertyId_0' });
      expectedInputs.targets.lightning__RecordPage.small = true;
      expectedInputs.targets.lightning__RecordPage.enabled = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });
  */
});
