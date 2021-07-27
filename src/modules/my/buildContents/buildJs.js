/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { pascalCase } from 'change-case';

export const buildJs = (contents) => {
  const { properties, targets, componentName } = contents;

  const propNames = properties.map((p) => p.name);

  // https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_config_for_app_builder_email_app_pane
  const inboxProps = [
    'dates',
    'emails',
    'location',
    'messageBody',
    'mode',
    'people',
    'source',
    'subject'
  ];

  const recordRelatedProps = ['recordId', 'objectApiName'];

  const apis = targets.lightning__Inbox.enabled
    ? [
        // merge @api properties for Inbox target.
        ...propNames,
        ...inboxProps.filter((ip) => {
          return !propNames.includes(ip);
        })
      ]
    : targets.lightning__RecordPage.enabled ||
      targets.lightning__RecordAction.enabled
    ? [
        // merge @api properties for Record related target.
        ...propNames,
        ...recordRelatedProps.filter((rrp) => {
          return !propNames.includes(rrp);
        })
      ]
    : propNames;

  const hasProperties = apis && apis.length > 0;
  const pascal = pascalCase(componentName);
  let js = '';
  js += `import { LightningElement ${
    hasProperties ? ', api' : ''
  } } from "lwc";\n`;
  if (targets.lightningSnapin__ChatMessage.enabled) {
    // https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-base-chat-message/documentation
    js += `import BaseChatMessage from 'lightningsnapin/baseChatMessage';\n`;
  }
  if (targets.lightningSnapin__Minimized.enabled) {
    // https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-minimized/documentation
    js += `import { assignHandler, maximize } from 'lightningsnapin/minimized';\n`;
  }
  if (targets.lightningSnapin__PreChat.enabled) {
    // https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-base-prechat/documentation
    js += `import BasePrechat from 'lightningsnapin/basePrechat';\n`;
  }
  if (targets.lightningSnapin__ChatHeader.enabled) {
    // https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-base-chat-header/documentation
    js += `import BaseChatHeader from 'lightningsnapin/baseChatHeader';\n`;
  }

  if (
    targets.lightning__RecordAction.enabled &&
    !targets.lightning__RecordAction.headlessAction
  ) {
    js += `import { CloseActionScreenEvent } from 'lightning/actions';\n`;
  }

  js += `export default class ${pascal} extends LightningElement {\n`;
  js += apis
    .map((p) => {
      return p ? `\t@api\n\t${p};\n` : null;
    })
    .join('');

  if (targets.lightning__RecordAction.enabled) {
    if (targets.lightning__RecordAction.headlessAction) {
      js += `\t@api\n\tinvoke() {\n\t\tconsole.log('headless quick action called');\n\t}\n`;
    } else {
      js += `\tcloseModal() {\n\t\tthis.dispatchEvent(new CloseActionScreenEvent());\n\t}\n`;
    }
  }

  js += `}`;

  return js;
};
