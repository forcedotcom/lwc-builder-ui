/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { createElement } from 'lwc';
import MyForm from 'my/form';
import { buildContents } from 'my/buildContents';
import { sentenceCase, camelCase } from 'change-case';

jest.mock('my/buildContents', () => ({ buildContents: jest.fn() }));

const EXPECTED_TARGETS = [
  { name: 'AppPage', value: 'lightning__AppPage' },
  { name: 'HomePage', value: 'lightning__HomePage' },
  { name: 'RecordPage', value: 'lightning__RecordPage' },
  { name: 'RecordAction', value: 'lightning__RecordAction' },
  { name: 'UtilityBar', value: 'lightning__UtilityBar' },
  { name: 'FlowScreen', value: 'lightning__FlowScreen' },
  { name: 'Tab', value: 'lightning__Tab' },
  { name: 'Inbox', value: 'lightning__Inbox' },
  { name: 'CommunityPage', value: 'lightningCommunity__Page' },
  { name: 'CommunityDefault', value: 'lightningCommunity__Default' },
  { name: 'CommunityPageLayout', value: 'lightningCommunity__Page_Layout' },
  { name: 'CommunityThemeLayout', value: 'lightningCommunity__Theme_Layout' },
  { name: 'SnapinChatMessage', value: 'lightningSnapin__ChatMessage' },
  { name: 'SnapinMinimized', value: 'lightningSnapin__Minimized' },
  { name: 'SnapinPreChat', value: 'lightningSnapin__PreChat' },
  { name: 'SnapinChatHeader', value: 'lightningSnapin__ChatHeader' }
];

const EXPECTED_INPUTS = {
  componentName: '',
  apiVersion: '52.0',
  withHtml: true,
  withCss: true,
  withSvg: false,
  withTest: false,
  isExposed: true,
  masterLabel: '',
  description: '',
  configurationEditor: '',
  svgFileName: '',
  svgFileContent: '',
  targets: {},
  propertyIds: ['propertyId_0'],
  properties: [],
  objectIds: ['objectId_0'],
  objects: []
};

EXPECTED_TARGETS.forEach((t) => {
  EXPECTED_INPUTS.targets[t.value] = {
    name: t.name,
    value: t.value,
    enabled: false,
    small: false,
    large: false,
    headlessAction: false,
    properties: [],
    objects: []
  };
});

describe('my-form', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('updates content when isExposed changed', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
    document.body.appendChild(element);

    const input = element.shadowRoot.querySelector('input[name="isExposed"]');
    input.checked = true;
    input.dispatchEvent(new CustomEvent('change'));

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve().then(() => {
      // THEN
      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.isExposed = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });

  it('updates content when withHtml changed', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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
    const element = createElement('my-form', {
      is: MyForm
    });
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
    const element = createElement('my-form', {
      is: MyForm
    });
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
    const element = createElement('my-form', {
      is: MyForm
    });
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

  it('updates content when component name input changed', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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
    const element = createElement('my-form', {
      is: MyForm
    });
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
    const element = createElement('my-form', {
      is: MyForm
    });
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

  it('updates content when config editor input changed', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
    document.body.appendChild(element);

    const COMP_NAME = 'MyFlowCmp';

    // WHEN
    const cmpName = element.shadowRoot.querySelector(
      'input[name="componentName"]'
    );
    cmpName.value = COMP_NAME;
    cmpName.dispatchEvent(new CustomEvent('change'));

    const target = element.shadowRoot.querySelector('my-target-definition');
    const event = new CustomEvent('changetarget', {
      detail: {
        target: { value: 'lightning__FlowScreen' },
        enabled: true,
        small: false,
        large: false,
        headlessAction: false
      }
    });
    target.dispatchEvent(event);

    const CONFIG_EDITOR_NAME = 'My Name in Flow';

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve()
      .then(() => {
        // WHEN
        const configEditorInput = element.shadowRoot.querySelector(
          'input[name="configurationEditor"]'
        );
        configEditorInput.value = CONFIG_EDITOR_NAME;
        configEditorInput.dispatchEvent(new CustomEvent('change'));
      })
      .then(() => {
        // THEN
        const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
        expectedInputs.componentName = camelCase(cmpName.value);
        expectedInputs.masterLabel = sentenceCase(cmpName.value);
        expectedInputs.configurationEditor = CONFIG_EDITOR_NAME;
        expectedInputs.targets.lightning__FlowScreen.enabled = true;
        expectedInputs.targets.lightning__FlowScreen.enabled = true;
        expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
      });
  });

  it('updates content when svg input changed', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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

  it('fires updatecontent event when inputs change', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
    document.body.appendChild(element);

    const doSomething = jest.fn();
    element.addEventListener('updatecontent', doSomething);

    // WHEN
    const input = element.shadowRoot.querySelector('input[name="description"]');
    input.value = 'My Desc';
    input.dispatchEvent(new CustomEvent('change'));

    // THEN
    expect(doSomething).toHaveBeenCalled();
  });

  it('renders property targets when target selected', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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

  it('renders objects when record page selected', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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

  it('adds property row when button clicked', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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
    const element = createElement('my-form', {
      is: MyForm
    });
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
    const element = createElement('my-form', {
      is: MyForm
    });
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

  it('adds object row when button clicked', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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
        const objects = element.shadowRoot.querySelectorAll(
          'my-sobject-definition'
        );
        expect(objects.length).toBe(2);
        expect(objects[0].oid).toBe('objectId_0');
        expect(objects[1].oid).toBe('objectId_1');
      });
    });
  });

  it('removes object row when button clicked', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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
      const object = element.shadowRoot.querySelector('my-sobject-definition');
      object.dispatchEvent(
        new CustomEvent('deletesobj', { detail: 'objectId_0' })
      );

      return Promise.resolve().then(() => {
        const objects = element.shadowRoot.querySelectorAll(
          'my-sobject-definition'
        );
        expect(objects.length).toBe(0);
      });
    });
  });

  it('updates content when object row event listened', () => {
    // GIVEN
    const element = createElement('my-form', {
      is: MyForm
    });
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
      const object = element.shadowRoot.querySelector('my-sobject-definition');
      object.dispatchEvent(
        new CustomEvent('changesobj', {
          detail: { id: 'objectId_0' }
        })
      );

      const expectedInputs = JSON.parse(JSON.stringify(EXPECTED_INPUTS));
      expectedInputs.objects.push({ id: 'objectId_0' });
      expectedInputs.targets.lightning__RecordPage.enabled = true;
      expect(buildContents).toHaveBeenLastCalledWith(expectedInputs);
    });
  });
});
