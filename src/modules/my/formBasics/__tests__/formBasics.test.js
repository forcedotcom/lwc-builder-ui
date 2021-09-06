/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { createElement } from 'lwc';
import MyForm from 'my/formBasics';
import { DEFAULT_BASICS } from '../../constants';

describe('my-form-basics', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('updates content when isExposed changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    const updateHandler = jest.fn();
    element.addEventListener('update', updateHandler);
    const input = element.shadowRoot.querySelector('input[name="isExposed"]');
    input.checked = true;
    input.dispatchEvent(new CustomEvent('change'));

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // THEN
      expect(updateHandler).toHaveBeenCalled();
    });
  });
  /*
  it('updates content when withHtml changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    const input = element.shadowRoot.querySelector('input[name="withHtml"]');
    input.checked = true;
    input.dispatchEvent(new CustomEvent('change'));

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // THEN
      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.withHtml = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });

  it('updates content when withCss changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    const input = element.shadowRoot.querySelector('input[name="withCss"]');
    input.checked = true;
    input.dispatchEvent(new CustomEvent('change'));

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // THEN
      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.withCss = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });

  it('updates content when withSvg changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    const input = element.shadowRoot.querySelector('input[name="withSvg"]');
    input.checked = true;
    input.dispatchEvent(new CustomEvent('change'));

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // THEN
      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.withSvg = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });

  it('updates content when withTest changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    const input = element.shadowRoot.querySelector('input[name="withTest"]');
    input.checked = true;
    input.dispatchEvent(new CustomEvent('change'));

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // THEN
      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.withTest = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });

  it('renders property targets when target selected', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    // WHEN
    const target = element.shadowRoot.querySelector('my-target-definition');
    const event = new CustomEvent('changetarget', {
      detail: { target: { value: 'lightning__AppPage' }, enabled: true }
    });
    target.dispatchEvent(event);

    // THEN
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      const propertyDefinitions = element.shadowRoot.querySelectorAll(
        'my-property-definition'
      );
      expect(propertyDefinitions.length).toBe(1);
      EXPECTED_TARGETS.forEach((item) => {
        expect(item.value in propertyDefinitions[0].targets).toBe(true);
      });
      expect(propertyDefinitions[0].pid).toBe('propertyId_0');
    });
  });

  it('updates content when component name input changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    // WHEN
    const input = element.shadowRoot.querySelector(
      'input[name="componentName"]'
    );
    input.value = 'MyCmp';
    input.dispatchEvent(new CustomEvent('change'));

    // THEN
    const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
    expectedInputs.componentName = camelCase(input.value);
    expectedInputs.masterLabel = sentenceCase(input.value);
    expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
  });

  it('updates content when master label input changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    // WHEN
    const input = element.shadowRoot.querySelector('input[name="masterLabel"]');
    input.value = 'My Primary Label';
    input.dispatchEvent(new CustomEvent('change'));

    // THEN
    const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
    expectedInputs.masterLabel = input.value;
    expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
  });

  it('updates content when description input changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    // WHEN
    const input = element.shadowRoot.querySelector('input[name="description"]');
    input.value = 'My Desc';
    input.dispatchEvent(new CustomEvent('change'));

    // THEN
    const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
    expectedInputs.description = input.value;
    expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
  });

  it('updates content when svg input changed', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    const input = element.shadowRoot.querySelector('input[name="withSvg"]');
    input.checked = true;
    input.dispatchEvent(new CustomEvent('change'));

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // WHEN
      const svgUploader = element.shadowRoot.querySelector('my-svg-uploader');
      svgUploader.dispatchEvent(
        new CustomEvent('uploadsvg', {
          detail: { fileName: 'myFileName', fileContent: 'myFileContent' }
        })
      );

      // THEN
      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.svgFileName = 'myFileName';
      expectedInputs.svgFileContent = 'myFileContent';
      expectedInputs.withSvg = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });

  it('fires update event when inputs change', () => {
    // GIVEN
    const element = createElement('my-form-basics', {
      is: MyForm
    });
    element.basics = DEFAULT_BASICS;
    document.body.appendChild(element);

    const doSomething = jest.fn();
    element.addEventListener('update', doSomething);

    // WHEN
    const input = element.shadowRoot.querySelector('input[name="description"]');
    input.value = 'My Desc';
    input.dispatchEvent(new CustomEvent('change'));

    // THEN
    expect(doSomething).toHaveBeenCalled();
  });
  */
});
