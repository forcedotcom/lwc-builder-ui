/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { pascalCase } from 'change-case';
import {
  MODULE_NAVIGATION_MIXIN_GENERATE_URL,
  MODULE_NAVIGATION_MIXIN_NAVIGATE,
  MODULE_PAGEREF_APP,
  MODULE_PAGEREF_COMM_LOGIN,
  MODULE_PAGEREF_KNOWLEDGE_ARTICLE,
  MODULE_PAGEREF_LIGHTNING_COMPONENT
} from '../constants/modules';
import { buildImportsForJs } from './buildModuleImports';

export const buildJs = (contents) => {
  const {
    properties,
    targets,
    componentName,
    modules: rawModules,
    lifecycleHooks
  } = contents;
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

  // convert modules in handy form
  const modules = rawModules.reduce((ms, c) => {
    const mo = {};
    c.modules.forEach((m) => {
      mo[m.value] = m;
    });
    return { ...ms, ...mo };
  }, {});
  console.log('modules', modules);

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
  js += `import { LightningElement${
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

  const imports = buildImportsForJs(modules);
  if (imports && imports.length > 0) {
    js += imports.join('\n');
    js += '\n';
  }

  if (
    targets.lightning__RecordAction.enabled &&
    !targets.lightning__RecordAction.headlessAction
  ) {
    js += `import { CloseActionScreenEvent } from 'lightning/actions';\n`;
  }

  js += '\n';
  if (
    modules[MODULE_NAVIGATION_MIXIN_NAVIGATE.value]?.checked ||
    modules[MODULE_NAVIGATION_MIXIN_GENERATE_URL.value]?.checked
  ) {
    js += `export default class ${pascal} extends NavigationMixin(LightningElement) {\n`;
  } else {
    js += `export default class ${pascal} extends LightningElement {\n`;
  }

  js += apis
    .map((p) => {
      return p ? `\t@api\n\t${p};\n` : null;
    })
    .join('');

  if (lifecycleHooks && lifecycleHooks.length > 0) {
    js += lifecycleHooks
      .filter((h) => !!h.checked)
      .map((h) => {
        switch (h.value) {
          case 'constructor':
            return `\tconstructor(){\n\t\tsuper();\n\t}\n`;
          case 'connectedCallback':
            return `\tconnectedCallback(){}\n`;
          case 'disconnectedCallback':
            return `\tdisconnectedCallback(){}\n`;
          case 'renderedCallback':
            if (h.options[0]?.checked) {
              return `\thasRendered = false;\n\trenderedCallback(){\n\t\tif(!this.hasRendered) {\n\t\t\tthis.hasRendered = true;\n\t\t\tconsole.log('First render');\n\t\t}\n\t}\n`;
            }
            return `\trenderedCallback(){}\n`;
          case 'errorCallback':
            return `\terrorCallback(error, stack){\n\t\tconsole.error(error, stack);\n\t}\n`;
          default:
            return null;
        }
      })
      .filter((h) => !!h)
      .join('\n');
  }

  if (targets.lightning__RecordAction.enabled) {
    if (targets.lightning__RecordAction.headlessAction) {
      js += `\t@api\n\tinvoke() {\n\t\tconsole.log('headless quick action called');\n\t}\n`;
    } else {
      js += `\tcloseModal() {\n\t\tthis.dispatchEvent(new CloseActionScreenEvent());\n\t}\n`;
    }
  }

  if (modules[MODULE_NAVIGATION_MIXIN_NAVIGATE.value]?.checked) {
    const navigateSubmodules =
      modules[MODULE_NAVIGATION_MIXIN_NAVIGATE.value]?.submodules
        .filter((s) => s.checked)
        .map((s) => {
          switch (s.id) {
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_APP.value}`:
              return `\tnavToApp() {\n\t\tthis[NavigationMixin.Navigate]({\n\t\t\ttype: 'standard__app',\n\t\t\tattributes: {\n\t\t\t\tappTarget: '[appId or appDeveloperName]',\n\t\t\t\tpageRef: {\n\t\t\t\t\t// PageReference\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_LIGHTNING_COMPONENT.value}`:
              return `\tnavToComponent() {\n\t\tthis[NavigationMixin.Navigate]({\n\t\t\ttype: 'standard__component',\n\t\t\tattributes: {\n\t\t\t\tcomponentName: '[namespace__componentName]'\n\t\t\t}\n\t\t\tstate: {\n\t\t\t\t[namespace__key]: '[value]'\n\t\t\t}\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_KNOWLEDGE_ARTICLE.value}`:
              return `\tnavToKnowledgeArticle() {\n\t\tthis[NavigationMixin.Navigate]({\n\t\t\ttype: 'standard__knowledgeArticlePage',\n\t\t\tattributes: {\n\t\t\t\tarticleType: '[API Name of the knowledge article record]',\n\t\t\t\turlName: '[urlName field value of KnowledgeArticleVersion]'\n\t\t\t}\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_COMM_LOGIN.value}`:
              return `\tnavToExpSiteLogin() {\n\t\tthis[NavigationMixin.Navigate]({\n\t\t\ttype: 'comm__loginPage',\n\t\t\tattributes: {\n\t\t\t\tactionName: '[login | logout]'\n\t\t\t}\n\t\t});\n\t}\n`;
            default:
              return null;
          }
        })
        .filter((s) => !!s) ?? [];
    if (navigateSubmodules && navigateSubmodules.length > 0) {
      js += navigateSubmodules.join('\n');
      js += '\n';
    }
  }

  if (modules[MODULE_NAVIGATION_MIXIN_GENERATE_URL.value]?.checked) {
    const generateUrlSubmodules =
      modules[MODULE_NAVIGATION_MIXIN_GENERATE_URL.value]?.submodules
        .filter((s) => s.checked)
        .map((s) => {
          switch (s.id) {
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_APP.value}`:
              return `\tgenerateUrlToApp() {\n\t\tthis[NavigationMixin.GenerateUrl]({\n\t\t\ttype: 'standard__app',\n\t\t\tattributes: {\n\t\t\t\tappTarget: '[appId or appDeveloperName]',\n\t\t\t\tpageRef: {\n\t\t\t\t\t// PageReference\n\t\t\t\t}\n\t\t\t}\n\t\t}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_LIGHTNING_COMPONENT.value}`:
              return `\tgenerateUrlToComponent() {\n\t\tthis[NavigationMixin.GenerateUrl]({\n\t\t\ttype: 'standard__component',\n\t\t\tattributes: {\n\t\t\t\tcomponentName: '[namespace__componentName]'\n\t\t\t}\n\t\t\tstate: {\n\t\t\t\t[namespace__key]: '[value]'\n\t\t\t}\n\t\t}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_KNOWLEDGE_ARTICLE.value}`:
              return `\tgenerateUrlToKnowledgeArticle() {\n\t\tthis[NavigationMixin.GenerateUrl]({\n\t\t\ttype: 'standard__knowledgeArticlePage',\n\t\t\tattributes: {\n\t\t\t\tarticleType: '[API Name of the knowledge article record]',\n\t\t\t\turlName: '[urlName field value of KnowledgeArticleVersion]'\n\t\t\t}\n\t\t}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_COMM_LOGIN.value}`:
              return `\tgenerateUrlToExpSiteLogin() {\n\t\tthis[NavigationMixin.GenerateUrl]({\n\t\t\ttype: 'comm__loginPage',\n\t\t\tattributes: {\n\t\t\t\tactionName: '[login|logout]'\n\t\t\t}\n\t\t}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            default:
              return null;
          }
        })
        .filter((s) => !!s) ?? [];
    if (generateUrlSubmodules && generateUrlSubmodules.length > 0) {
      js += generateUrlSubmodules.join('\n');
      js += '\n';
    }
  }

  js += `}`;

  return js;
};
