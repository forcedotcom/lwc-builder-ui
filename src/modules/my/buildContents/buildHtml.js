/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export const buildHtml = (contents) => {
  const { targets, componentName, standardComponents } = contents;

  // Headless action doesn't have content
  if (
    targets?.lightning__RecordAction?.enabled &&
    targets?.lightning__RecordAction?.headlessAction
  ) {
    return `<template></template>`;
  }

  let html = '';
  /* Header */
  if (
    targets?.lightning__RecordAction?.enabled &&
    !targets?.lightning__RecordAction?.headlessAction
  ) {
    html += `<template>\n\t<lightning-quick-action-panel header="${componentName}">\n
`;
  } else {
    html += `<template>\n\t<h1>${componentName}</h1>\n`;
  }
  /* Content */
  const iconExamples = `{ standard:account | utility:add | custom:custom1 | action:preview | doctype:image }`;
  const components =
    standardComponents
      ?.filter((c) => c.checked)
      .map((c) => {
        switch (c.value) {
          case 'lightning-button':
            return `\t<lightning-button\n\t\ticon-name="${iconExamples}"\n\t\tlabel="Button"\n\t\tvariant="{ base | brand | neutral | brand-outline | destructive | destructive-text | success }"\n\t\tonclick={handleButtonClick}\n\t\ttitle="Button Title"\n\t></lightning-button>\n`;
          case 'lightning-card':
            return `\t<lightning-card\n\t\ticon-name="${iconExamples}"\n\t\tvariant="{ base | narrow }"\n\t\ttitle="Card Title"\n\t>\n\t\t<div slot="title">Card Title</div>\n\t\t<div slot="actions">Actions</div>\n\t\t<div>Card Body</div>\n\t\t<div slot="footer">Card Footer</div>\n\t</lightning-card>\n`;
          default:
            return null;
        }
      })
      .filter((c) => !!c) ?? [];
  if (components && components.length > 0) {
    html += components.join('\n');
    html += '\n';
  }

  /* Footer */
  if (
    targets?.lightning__RecordAction?.enabled &&
    !targets?.lightning__RecordAction?.headlessAction
  ) {
    html += `\n\t\t<div slot="footer">\n\t\t\t<lightning-button variant="neutral" label="Close" onclick={closeModal}></lightning-button>\n\t\t\t<lightning-button variant="brand" label="Action" class="slds-m-left_x-small"></lightning-button>\n\t\t</div>\n\t</lightning-quick-action-panel>\n</template>\n`;
  } else {
    html += `</template>\n`;
  }
  return html;
};
