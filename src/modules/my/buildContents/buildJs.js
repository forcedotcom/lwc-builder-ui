import { pascalCase } from 'change-case';

const buildJs = (contents) => {
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
    // merge @api properties for Inbox target.
    const apis = targets.lightning__Inbox.enabled
        ? [
              ...propNames,
              ...inboxProps.filter((ip) => {
                  return !propNames.includes(ip);
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

    js += `export default class ${pascal} extends LightningElement {\n`;
    js += apis
        .map((p) => {
            return p ? `\t@api\n\t${p};\n` : null;
        })
        .join('');
    js += `}`;

    return js;
};
export default buildJs;
