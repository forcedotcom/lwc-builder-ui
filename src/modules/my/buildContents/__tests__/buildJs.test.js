/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { buildJs } from '../buildJs';
import { pascalCase } from 'change-case';

const buildTargets = (option) => {
  const targetsArr = [
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
  const targets = {};
  targetsArr.forEach((t) => {
    targets[t.value] = {
      name: t.name,
      value: t.value,
      enabled: false,
      small: false,
      large: false,
      headlessAction: false,
      properties: [],
      objects: []
    };
    if (option) {
      for (const v in option) {
        if (Object.prototype.hasOwnProperty.call(option, v)) {
          targets[v] = { ...targets[v], ...option[v] };
        }
      }
    }
  });
  return targets;
};

describe('my-build-js', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('returns correct js when there are api props', () => {
    // GIVEN
    const contents = {
      properties: [{ name: 'myProp1' }, { name: 'myProp2' }],
      targets: buildTargets({
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: false }
      }),
      componentName: 'MyLWC'
    };

    // WHEN
    const js = buildJs(contents);

    // THEN
    let expectedJs = `import { LightningElement , api } from "lwc";\n`;
    expectedJs += `export default class ${pascalCase(
      contents.componentName
    )} extends LightningElement {\n`;
    expectedJs += `\t@api\n\tmyProp1;\n`;
    expectedJs += `\t@api\n\tmyProp2;\n`;
    expectedJs += `}`;

    expect(js).toBe(expectedJs);
  });

  it('returns correct js when lightning__Inbox is enabled', () => {
    // GIVEN
    const contents = {
      properties: [{ name: 'myProp1' }, { name: 'myProp2' }],
      targets: buildTargets({
        lightning__Inbox: { enabled: true },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: false }
      }),
      componentName: 'MyLWC'
    };

    // WHEN
    const js = buildJs(contents);

    // THEN
    let expectedJs = `import { LightningElement , api } from "lwc";\n`;
    expectedJs += `export default class ${pascalCase(
      contents.componentName
    )} extends LightningElement {\n`;
    expectedJs += `\t@api\n\tmyProp1;\n`;
    expectedJs += `\t@api\n\tmyProp2;\n`;
    expectedJs += `\t@api\n\tdates;\n`;
    expectedJs += `\t@api\n\temails;\n`;
    expectedJs += `\t@api\n\tlocation;\n`;
    expectedJs += `\t@api\n\tmessageBody;\n`;
    expectedJs += `\t@api\n\tmode;\n`;
    expectedJs += `\t@api\n\tpeople;\n`;
    expectedJs += `\t@api\n\tsource;\n`;
    expectedJs += `\t@api\n\tsubject;\n`;
    expectedJs += `}`;

    expect(js).toBe(expectedJs);
  });

  it('returns correct js when lightningSnapin__ChatMessage enabled', () => {
    // GIVEN
    const contents = {
      properties: [{ name: 'myProp1' }, { name: 'myProp2' }],
      targets: buildTargets({
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: true },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: false }
      }),
      componentName: 'MyLWC'
    };

    // WHEN
    const js = buildJs(contents);

    // THEN
    let expectedJs = `import { LightningElement , api } from "lwc";\n`;
    expectedJs += `import BaseChatMessage from 'lightningsnapin/baseChatMessage';\n`;
    expectedJs += `export default class ${pascalCase(
      contents.componentName
    )} extends LightningElement {\n`;
    expectedJs += `\t@api\n\tmyProp1;\n`;
    expectedJs += `\t@api\n\tmyProp2;\n`;
    expectedJs += `}`;

    expect(js).toBe(expectedJs);
  });

  it('returns correct js when lightningSnapin__Minimized enabled', () => {
    // GIVEN
    const contents = {
      properties: [{ name: 'myProp1' }, { name: 'myProp2' }],
      targets: buildTargets({
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: true },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: false }
      }),
      componentName: 'MyLWC'
    };

    // WHEN
    const js = buildJs(contents);

    // THEN
    let expectedJs = `import { LightningElement , api } from "lwc";\n`;
    expectedJs += `import { assignHandler, maximize } from 'lightningsnapin/minimized';\n`;
    expectedJs += `export default class ${pascalCase(
      contents.componentName
    )} extends LightningElement {\n`;
    expectedJs += `\t@api\n\tmyProp1;\n`;
    expectedJs += `\t@api\n\tmyProp2;\n`;
    expectedJs += `}`;

    expect(js).toBe(expectedJs);
  });

  it('returns correct js when lightningSnapin__PreChat enabled', () => {
    // GIVEN
    const contents = {
      properties: [{ name: 'myProp1' }, { name: 'myProp2' }],
      targets: buildTargets({
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: true },
        lightningSnapin__ChatHeader: { enabled: false }
      }),
      componentName: 'MyLWC'
    };

    // WHEN
    const js = buildJs(contents);

    // THEN
    let expectedJs = `import { LightningElement , api } from "lwc";\n`;
    expectedJs += `import BasePrechat from 'lightningsnapin/basePrechat';\n`;
    expectedJs += `export default class ${pascalCase(
      contents.componentName
    )} extends LightningElement {\n`;
    expectedJs += `\t@api\n\tmyProp1;\n`;
    expectedJs += `\t@api\n\tmyProp2;\n`;
    expectedJs += `}`;
    expect(js).toBe(expectedJs);
  });

  it('returns correct js when lightningSnapin__ChatHeader enabled', () => {
    // GIVEN
    const contents = {
      properties: [{ name: 'myProp1' }, { name: 'myProp2' }],
      targets: buildTargets({
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: true }
      }),
      componentName: 'MyLWC'
    };

    // WHEN
    const js = buildJs(contents);

    // THEN
    let expectedJs = `import { LightningElement , api } from "lwc";\n`;
    expectedJs += `import BaseChatHeader from 'lightningsnapin/baseChatHeader';\n`;
    expectedJs += `export default class ${pascalCase(
      contents.componentName
    )} extends LightningElement {\n`;
    expectedJs += `\t@api\n\tmyProp1;\n`;
    expectedJs += `\t@api\n\tmyProp2;\n`;
    expectedJs += `}`;

    expect(js).toBe(expectedJs);
  });
});
