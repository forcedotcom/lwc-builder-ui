/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { buildMeta } from '../buildMeta';

const LATEST_API_VERSION = '52.0';

describe('my-build-meta', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('returns correct meta when masterLabel specified', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      masterLabel: 'Mylabel',
      targets: {},
      properties: [],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<masterLabel>${contents.masterLabel}</masterLabel>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when description specified', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      description: 'My desc',
      targets: {},
      properties: [],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<description>${contents.description}</description>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta for home pages', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta for app pages', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__AppPage: {
          enabled: true,
          value: 'lightning__AppPage'
        }
      },
      properties: [],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__AppPage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta for community pages', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightningCommunity__Page: {
          enabled: true,
          value: 'lightningCommunity__Page'
        }
      },
      properties: [],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightningCommunity__Page</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta for record pages', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__RecordPage: {
          enabled: true,
          value: 'lightning__RecordPage'
        }
      },
      properties: [],
      objects: [{ name: 'Account' }]
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__RecordPage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__RecordPage">\n`;
    expectedMeta += `\t\t\t<objects>\n`;
    expectedMeta += `\t\t\t\t<object>Account</object>\n`;
    expectedMeta += `\t\t\t</objects>\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta for small form factor', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__RecordPage: {
          enabled: true,
          small: true,
          value: 'lightning__RecordPage'
        }
      },
      properties: [],
      objects: [{ name: 'Account' }]
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__RecordPage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__RecordPage">\n`;
    expectedMeta += `\t\t\t<objects>\n`;
    expectedMeta += `\t\t\t\t<object>Account</object>\n`;
    expectedMeta += `\t\t\t</objects>\n`;
    expectedMeta += `\t\t\t<supportedFormFactors>\n`;
    expectedMeta += `\t\t\t\t<supportedFormFactor type="Small"/>\n`;
    expectedMeta += `\t\t\t</supportedFormFactors>\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta for large form factor', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__RecordPage: {
          enabled: true,
          large: true,
          value: 'lightning__RecordPage'
        }
      },
      properties: [],
      objects: [{ name: 'Account' }]
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__RecordPage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__RecordPage">\n`;
    expectedMeta += `\t\t\t<objects>\n`;
    expectedMeta += `\t\t\t\t<object>Account</object>\n`;
    expectedMeta += `\t\t\t</objects>\n`;
    expectedMeta += `\t\t\t<supportedFormFactors>\n`;
    expectedMeta += `\t\t\t\t<supportedFormFactor type="Large"/>\n`;
    expectedMeta += `\t\t\t</supportedFormFactors>\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when apex property indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          type: 'apex',
          apexClassName: 'MyClass',
          selectedTargets: ['lightning__HomePage']
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="MyClass" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when sobject property indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          type: 'sobject',
          sObjectName: 'Account',
          selectedTargets: ['lightning__HomePage']
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="Account" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when property with datasource indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__HomePage'],
          type: 'String',
          datasource: 'MyDatasource'
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="String" datasource="MyDatasource" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when default property indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__HomePage'],
          type: 'Boolean',
          default: true
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="Boolean" default="true" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when property with description indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__HomePage'],
          type: 'Integer',
          description: 'MyDesc'
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="Integer" description="MyDesc" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when property with min / max indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__HomePage'],
          type: 'Integer',
          min: 0,
          max: 100
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="Integer" min="0" max="100" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when property with label indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__HomePage'],
          type: 'String',
          label: 'MyLabel'
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="String" label="MyLabel" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when property with placeholder indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__HomePage'],
          type: 'String',
          placeholder: 'MyPlaceholder'
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="String" placeholder="MyPlaceholder" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when required property indicated', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__HomePage: {
          enabled: true,
          value: 'lightning__HomePage'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__HomePage'],
          type: 'String',
          required: true
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__HomePage</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__HomePage">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="String" required="true" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when lightning__FlowScreen input only prop', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__FlowScreen: {
          enabled: true,
          value: 'lightning__FlowScreen'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__FlowScreen'],
          type: 'Integer',
          flowInput: true
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__FlowScreen</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__FlowScreen">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="Integer" role="inputOnly" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('returns correct meta when lightning__FlowScreen output only prop', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__FlowScreen: {
          enabled: true,
          value: 'lightning__FlowScreen'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__FlowScreen'],
          type: 'String',
          flowOutput: true
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__FlowScreen</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__FlowScreen">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="String" role="outputOnly" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('some property attributes ignored when lightning__FlowScreen', () => {
    // GIVEN
    const contents = {
      apiVersion: '50.0',
      isExposed: true,
      targets: {
        lightning__FlowScreen: {
          enabled: true,
          value: 'lightning__FlowScreen'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__FlowScreen'],
          type: 'String',
          datasource: 'MyDatasource',
          min: 0,
          max: 100,
          placeholder: 'MyPlaceholder'
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__FlowScreen</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__FlowScreen">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="String" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('outputOnly Flow property ignores default and required attributes', () => {
    // GIVEN
    const contents = {
      apiVersion: LATEST_API_VERSION,
      isExposed: true,
      targets: {
        lightning__FlowScreen: {
          enabled: true,
          value: 'lightning__FlowScreen'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightning__FlowScreen'],
          type: 'String',
          flowOutput: true,
          default: 'defaultValue',
          required: true
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__FlowScreen</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__FlowScreen">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="String" role="outputOnly" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;

    expect(meta).toBe(expectedMeta);
  });

  it('omit lightningCommunity__Page from targetConfigs', () => {
    // GIVEN
    const contents = {
      apiVersion: LATEST_API_VERSION,
      isExposed: true,
      targets: {
        lightningCommunity__Page: {
          enabled: true,
          value: 'lightningCommunity__Page'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightningCommunity__Page'],
          type: 'String'
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightningCommunity__Page</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `</LightningComponentBundle>`;
    expect(meta).toBe(expectedMeta);
  });

  it('supportedFormFactors support is limited to some targets', () => {
    // GIVEN
    const contents = {
      apiVersion: LATEST_API_VERSION,
      isExposed: true,
      targets: {
        lightning__UtilityBar: {
          enabled: true,
          value: 'lightning__UtilityBar',
          small: true
        }
      },
      properties: [],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__UtilityBar</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `</LightningComponentBundle>`;
    expect(meta).toBe(expectedMeta);
  });

  it('supports QuickAction target', () => {
    // GIVEN
    const contents = {
      apiVersion: LATEST_API_VERSION,
      isExposed: true,
      targets: {
        lightning__RecordAction: {
          enabled: true,
          value: 'lightning__RecordAction'
        }
      },
      properties: [],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__RecordAction</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__RecordAction">\n`;
    expectedMeta += `\t\t\t<actionType>ScreenAction</actionType>\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;
    expect(meta).toBe(expectedMeta);
  });

  it('supports Headless QuickAction target', () => {
    // GIVEN
    const contents = {
      apiVersion: LATEST_API_VERSION,
      isExposed: true,
      targets: {
        lightning__RecordAction: {
          enabled: true,
          value: 'lightning__RecordAction',
          headlessAction: true
        }
      },
      properties: [],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightning__RecordAction</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightning__RecordAction">\n`;
    expectedMeta += `\t\t\t<actionType>Action</actionType>\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;
    expect(meta).toBe(expectedMeta);
  });

  it('supports CMS Content Type filter props when aiming only lightningCommunity__Default target', () => {
    // GIVEN
    const contents = {
      apiVersion: LATEST_API_VERSION,
      isExposed: true,
      targets: {
        lightningCommunity__Default: {
          enabled: true,
          value: 'lightningCommunity__Default'
        }
      },
      properties: [
        {
          name: 'MyProp',
          selectedTargets: ['lightningCommunity__Default'],
          type: 'ContentReference',
          cmsFilters: [
            { id: 'cms_document', name: 'CMS Document', value: 'cms_document' },
            { id: 'news', name: 'News', value: 'news' }
          ]
        }
      ],
      objects: []
    };

    // WHEN
    const meta = buildMeta(contents);

    // THEN
    let expectedMeta = ``;
    expectedMeta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
    expectedMeta += `\t<apiVersion>${contents.apiVersion}</apiVersion>\n`;
    expectedMeta += `\t<isExposed>${contents.isExposed}</isExposed>\n`;
    expectedMeta += `\t<targets>\n`;
    expectedMeta += `\t\t<target>lightningCommunity__Default</target>\n`;
    expectedMeta += `\t</targets>\n`;
    expectedMeta += `\t<targetConfigs>\n`;
    expectedMeta += `\t\t<targetConfig targets="lightningCommunity__Default">\n`;
    expectedMeta += `\t\t\t<property name="MyProp" type="ContentReference" filter="cms_document,news" />\n`;
    expectedMeta += `\t\t</targetConfig>\n`;
    expectedMeta += `\t</targetConfigs>\n`;
    expectedMeta += `</LightningComponentBundle>`;
    expect(meta).toBe(expectedMeta);
  });
});
