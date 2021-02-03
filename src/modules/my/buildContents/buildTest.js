import { pascalCase, camelCase, paramCase } from 'change-case';
const buildTest = (contents) => {
    const {componentName} = contents;
    const pascal = pascalCase(componentName);
    const param = paramCase(componentName);
    const camel = camelCase(componentName)
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
export default buildTest;
