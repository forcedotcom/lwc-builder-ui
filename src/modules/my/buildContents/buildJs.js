/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { pascalCase } from 'change-case';
import {
  MODULE_BARCODE_SCANNER,
  MODULE_NAVIGATION_MIXIN_GENERATE_URL,
  MODULE_NAVIGATION_MIXIN_NAVIGATE,
  MODULE_OBJECT_API_NAME,
  MODULE_PAGEREF_APP,
  MODULE_PAGEREF_CMS_PAGE,
  MODULE_PAGEREF_COMM_LOGIN,
  MODULE_PAGEREF_EXP_NAMED_PAGE,
  MODULE_PAGEREF_KNOWLEDGE_ARTICLE,
  MODULE_PAGEREF_LIGHTNING_COMPONENT,
  MODULE_PAGEREF_NAV_ITEM_PAGE,
  MODULE_PAGEREF_OBJ_PAGE,
  MODULE_PAGEREF_RECORD_PAGE,
  MODULE_PAGEREF_RECORD_REL_PAGE,
  MODULE_PAGEREF_STD_NAMED_PAGE,
  MODULE_PAGEREF_WEB_PAGE,
  MODULE_RECORD_ID,
  MODULE_REGION_WIDTH,
  MODULE_TOAST,
  MODULE_UI_RECORD_API_GET_RECORD,
  PAGEREF_ATTR_APP_PAGE,
  PAGEREF_ATTR_CMS_PAGE,
  PAGEREF_ATTR_COMM_LOGIN_PAGE,
  PAGEREF_ATTR_EXP_NAMED_PAGE,
  PAGEREF_ATTR_KNOWLEDGE_ARTICLE_PAGE,
  PAGEREF_ATTR_LIGHTNING_COMPONENT_PAGE,
  PAGEREF_ATTR_NAV_ITEM_PAGE,
  PAGEREF_ATTR_OBJ_PAGE,
  PAGEREF_ATTR_RECORD_PAGE,
  PAGEREF_ATTR_RECORD_REL_PAGE,
  PAGEREF_ATTR_STD_NAMED_PAGE,
  PAGEREF_ATTR_WEB_PAGE
} from '../constants/modules';
import {
  buildImportsForJs,
  checkWireModules
} from './buildModuleImportsHelper';

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

  const apis = targets.lightning__Inbox.enabled
    ? [
        // merge @api properties for Inbox target.
        ...propNames,
        ...inboxProps.filter((ip) => {
          return !propNames.includes(ip);
        })
      ]
    : propNames;

  const hasProperties = apis && apis.length > 0;
  const hasWire = checkWireModules(modules);
  const pascal = pascalCase(componentName);
  let js = '';
  js += `import { LightningElement${hasProperties ? ', api' : ''}${
    hasWire ? ', wire' : ''
  } } from "lwc";\n`;

  // Target Specific Imports
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

  // Module Imports
  const imports = buildImportsForJs(modules);
  if (imports && imports.length > 0) {
    js += imports.join('\n');
    js += '\n';
  }

  // Screen RecordAction Close Event
  if (
    targets.lightning__RecordAction.enabled &&
    !targets.lightning__RecordAction.headlessAction
  ) {
    js += `import { CloseActionScreenEvent } from 'lightning/actions';\n`;
  }

  js += '\n';

  // LightningElement (+ NavigationMixin)
  if (
    modules[MODULE_NAVIGATION_MIXIN_NAVIGATE.value]?.checked ||
    modules[MODULE_NAVIGATION_MIXIN_GENERATE_URL.value]?.checked
  ) {
    js += `export default class ${pascal} extends NavigationMixin(LightningElement) {\n`;
  } else {
    js += `export default class ${pascal} extends LightningElement {\n`;
  }

  // @api variables
  js += apis
    .map((p) => {
      return p ? `\t@api\n\t${p};\n` : null;
    })
    .join('');

  // TODO: @api getter/setter
  // TODO: @wire

  if (modules[MODULE_RECORD_ID.value]?.checked) {
    js += `\t@api recordId;\n`;
  }
  if (modules[MODULE_OBJECT_API_NAME.value]?.checked) {
    js += `\t@api objectApiName;\n`;
  }
  if (modules[MODULE_REGION_WIDTH.value]?.checked) {
    js += `\t@api flexipageRegionWidth;\n`;
  }

  /* ==== uiRecordApi @wire getRecord ==== */
  if (modules[MODULE_UI_RECORD_API_GET_RECORD.value]?.checked) {
    // property or function
    const propOrFunc = modules[
      MODULE_UI_RECORD_API_GET_RECORD.value
    ].preferences.find((pf) => pf.id === 'getRecord_propertyOrFunction').value;
    // param format
    const fieldsOrLayoutType = modules[
      MODULE_UI_RECORD_API_GET_RECORD.value
    ].preferences.find((pf) => pf.id === 'getRecord_fieldsOrLayoutTypes').value;

    js += `\t@wire(getRecord, { recordId: '${
      modules[MODULE_RECORD_ID.value]?.checked ? '$recordId' : '{recordId}'
    }', ${
      fieldsOrLayoutType === 'getRecord_fieldsOrLayoutTypes_fields'
        ? `fields: ['ObjectApiName.FieldName']`
        : `layoutTypes: ['Full', 'Compact'], modes: ['Create', 'Edit', 'View']`
    }, optionalFields: ['ObjectApiName.FieldName'] })\n`;

    if (propOrFunc === 'getRecord_propertyOrFunction_property') {
      js += `\trecord;`;
    } else {
      js += `\twiredRecord({ error, data }) {\n\t\tif (error) {\n\t\t\tconsole.error(error);\n\t\t} else if (data) {\n\t\t\tconsole.log(data);\n\t\t}\n\t}`;
    }
  }

  // LIFECYCLE HOOKS
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
              return `\tisFirstRender = false;\n\trenderedCallback(){\n\t\tif(!this.isFirstRender) {\n\t\t\tthis.isFirstRender = true;\n\t\t\tconsole.log('First render');\n\t\t}\n\t}\n`;
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
    js += '\n';
  }

  // RECORD ACTION
  if (targets.lightning__RecordAction.enabled) {
    if (targets.lightning__RecordAction.headlessAction) {
      js += `\t@api\n\tinvoke() {\n\t\tconsole.log('headless quick action called');\n\t}\n`;
    } else {
      js += `\tcloseModal() {\n\t\tthis.dispatchEvent(new CloseActionScreenEvent());\n\t}\n`;
    }
  }

  // NavigationMixin.Navigate
  if (modules[MODULE_NAVIGATION_MIXIN_NAVIGATE.value]?.checked) {
    const navigateSubmodules =
      modules[MODULE_NAVIGATION_MIXIN_NAVIGATE.value]?.submodules
        .filter((s) => s.checked)
        .map((s) => {
          switch (s.id) {
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_APP.value}`:
              return `\tnavToApp() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_APP_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_LIGHTNING_COMPONENT.value}`:
              return `\tnavToLightningComponentPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_LIGHTNING_COMPONENT_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_KNOWLEDGE_ARTICLE.value}`:
              return `\tnavToKnowledgeArticle() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_KNOWLEDGE_ARTICLE_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_COMM_LOGIN.value}`:
              return `\tnavToExpSiteLoginPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_COMM_LOGIN_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_CMS_PAGE.value}`:
              return `\tnavToExpCmsPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_CMS_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_EXP_NAMED_PAGE.value}`:
              return `\tnavToExpNamedPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_EXP_NAMED_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_STD_NAMED_PAGE.value}`:
              return `\tnavToStdNamedPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_STD_NAMED_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_NAV_ITEM_PAGE.value}`:
              return `\tnavToNavItemPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_NAV_ITEM_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_OBJ_PAGE.value}`:
              return `\tnavToObjectPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_OBJ_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_RECORD_PAGE.value}`:
              return `\tnavToRecordPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_RECORD_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_RECORD_REL_PAGE.value}`:
              return `\tnavToRecordRelationshipPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_RECORD_REL_PAGE});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_NAVIGATE.value}-${MODULE_PAGEREF_WEB_PAGE.value}`:
              return `\tnavToWebPage() {\n\t\tthis[NavigationMixin.Navigate](${PAGEREF_ATTR_WEB_PAGE});\n\t}\n`;
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

  // NavigationMixin.GenerateUrl
  if (modules[MODULE_NAVIGATION_MIXIN_GENERATE_URL.value]?.checked) {
    const generateUrlSubmodules =
      modules[MODULE_NAVIGATION_MIXIN_GENERATE_URL.value]?.submodules
        .filter((s) => s.checked)
        .map((s) => {
          switch (s.id) {
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_APP.value}`:
              return `\tgenerateUrlToApp() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_APP_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_LIGHTNING_COMPONENT.value}`:
              return `\tgenerateUrlToLightningComponentPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_LIGHTNING_COMPONENT_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_KNOWLEDGE_ARTICLE.value}`:
              return `\tgenerateUrlToKnowledgeArticlePage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_KNOWLEDGE_ARTICLE_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_COMM_LOGIN.value}`:
              return `\tgenerateUrlToExpSiteLoginPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_COMM_LOGIN_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_CMS_PAGE.value}`:
              return `\tgenerateUrlToExpCmsPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_CMS_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_EXP_NAMED_PAGE.value}`:
              return `\tgenerateUrlToExpNamedPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_EXP_NAMED_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_STD_NAMED_PAGE.value}`:
              return `\tgenerateUrlToStdNamedPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_STD_NAMED_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_NAV_ITEM_PAGE.value}`:
              return `\tgenerateUrlToNavItemPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_NAV_ITEM_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_OBJ_PAGE.value}`:
              return `\tgenerateUrlToObjPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_OBJ_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_RECORD_PAGE.value}`:
              return `\tgenerateUrlToRecordPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_RECORD_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_RECORD_REL_PAGE.value}`:
              return `\tgenerateUrlToRecordRelPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_RECORD_REL_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
            case `${MODULE_NAVIGATION_MIXIN_GENERATE_URL.value}-${MODULE_PAGEREF_WEB_PAGE.value}`:
              return `\tgenerateUrlToWebPage() {\n\t\tthis[NavigationMixin.GenerateUrl](${PAGEREF_ATTR_WEB_PAGE}).then(url => {\n\t\t\tconsole.log('Generated URL', url);\n\t\t});\n\t}\n`;
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

  // Toast Notifications
  if (modules[MODULE_TOAST.value]?.checked) {
    js += `\tshowToastNotification() {\n\t\tthis.dispatchEvent(new ShowToastEvent({\n\t\t\ttitle: 'Title',\n\t\t\tmessage: 'Message',\n\t\t\tvariant: '{ info | success | warning | error }',\n\t\t\tmode: '{ dismissable | pester | sticky }'\n\t\t}));\n\t}\n`;
  }

  // Barcode Scanner
  if (modules[MODULE_BARCODE_SCANNER.value]?.checked) {
    js += `\tscanBarcode() {\n\t\tconst scanner = getBarcodeScanner();\n\t\tif(scanner?.isAvailable()) {\n\t\t\t// The list of barcodeTypes: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_barcodescanner_constants\n\t\t\tconst scanningOptions = {\n\t\t\t\tbarcodeTypes: [scanner.barcodeTypes.QR]\n\t\t\t};\n\t\t\tscanner\n\t\t\t\t.beginCapture(scanningOptions)\n\t\t\t\t.then((barcode) => {\n\t\t\t\t\tconsole.log(barcode.type, barcode.value);\n\t\t\t\t})\n\t\t\t\t.catch((error) => {\n\t\t\t\t\tconsole.error(error);\n\t\t\t\t})\n\t\t\t\t.finally(() => {\n\t\t\t\t\tscanner.endCapture();\n\t\t\t\t});\n\t\t}\n\t}\n`;
  }

  js += `}`;

  return js;
};
