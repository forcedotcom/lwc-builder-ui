/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { buildTest } from '../buildTest';
import { pascalCase, camelCase, paramCase } from 'change-case';

describe('my-build-contents', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('test includes passed in componentName correctly formatted', () => {
    // GIVEN
    const contents = { componentName: 'MyLWC' };

    // WHEN
    const test = buildTest(contents);

    // THEN
    const pascal = pascalCase(contents.componentName);
    const param = paramCase(contents.componentName);
    const camel = camelCase(contents.componentName);
    expect(test).toBe(`import { createElement } from "lwc";
import ${pascal} from "c/${camel}";

// import { registerLdsTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
// import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';

describe("c-${param}", () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it("has component name on the header", () => {
        const element = createElement("c-${param}", {
            is: ${pascal}
        });
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            const componentHeader = element.shadowRoot.querySelector("h1");
            expect(componentHeader.textContent).toBe("${contents.componentName}");
        });
    });
});`);
  });
});
