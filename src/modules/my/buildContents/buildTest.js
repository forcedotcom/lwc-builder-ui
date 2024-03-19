/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { pascalCase } from 'pascal-case';
import { camelCase } from 'camel-case';
import { paramCase } from 'param-case';
export const buildTest = (contents) => {
  const { componentName } = contents;
  const pascal = pascalCase(componentName);
  const param = paramCase(componentName);
  const camel = camelCase(componentName);
  return `import { createElement } from "lwc";
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
            expect(componentHeader.textContent).toBe("${componentName}");
        });
    });
});`;
};
