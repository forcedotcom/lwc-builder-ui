/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { buildJs } from '../buildJs';
import { pascalCase } from 'change-case';

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
      targets: {
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: false }
      },
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
      targets: {
        lightning__Inbox: { enabled: true },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: false }
      },
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
      targets: {
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: true },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: false }
      },
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
      targets: {
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: true },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: false }
      },
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
      targets: {
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: true },
        lightningSnapin__ChatHeader: { enabled: false }
      },
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
      targets: {
        lightning__Inbox: { enabled: false },
        lightningSnapin__ChatMessage: { enabled: false },
        lightningSnapin__Minimized: { enabled: false },
        lightningSnapin__PreChat: { enabled: false },
        lightningSnapin__ChatHeader: { enabled: true }
      },
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
