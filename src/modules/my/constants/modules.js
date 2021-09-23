/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Submodules : Multi select modules related to the parent module.
 * Preferences : Pick one.
 */

export const CATEGORY_NONE = {
  label: 'General',
  id: 'none'
};
export const CATEGORY_EXPERIENCE_CLOUD = {
  label: 'Experience Cloud',
  id: 'exp'
};
export const CATEGORY_I18N = {
  label: 'Internationalization i18n',
  id: 'i18n'
};
export const CATEGORY_USER = {
  label: 'User',
  id: 'user'
};
export const CATEGORY_CONTEXT = {
  label: 'Context',
  id: 'context'
};
export const CATEGORY_UI_RECORD_API = {
  label: 'uiRecordApi',
  id: 'uiRecordApi'
};
export const CATEGORY_FILE = {
  label: 'File',
  id: 'file'
};

export const CATEGORY_SPECIAL = {
  label: 'Spécialité',
  id: 'special'
};

/* ===== MODULES ===== */
export const MODULE_TOAST = {
  label: 'Toast Notifications',
  value: 'toast',
  help: 'A toast notification pops up to alert users of a success, error, or warning',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/lwc/use_toast'
};

/* ===== PageReferences ===== */
export const MODULE_PAGEREF_APP = {
  label: 'App',
  value: 'standard__app',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_LIGHTNING_COMPONENT = {
  label: 'Lightning Component',
  value: 'standard__component',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_KNOWLEDGE_ARTICLE = {
  label: 'Knowledge Article Page',
  value: 'standard__knowledgeArticlePage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_COMM_LOGIN = {
  label: 'Experience Cloud Site Login Page',
  value: 'comm__loginPage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_CMS_PAGE = {
  label: 'Managed Content Page (Salesforce CMS)',
  value: 'standard__managedContentPage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_EXP_NAMED_PAGE = {
  label: 'Named Page Type (Experience Builder Sites)',
  value: 'comm__namedPage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_STD_NAMED_PAGE = {
  label: 'Named Page Type (Standard)',
  value: 'standard__namedPage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_NAV_ITEM_PAGE = {
  label: 'Navigation Item Page Type',
  value: 'standard__navItemPage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_OBJ_PAGE = {
  label: 'Object Page Type',
  value: 'standard__objectPage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_RECORD_PAGE = {
  label: 'Record Page Type',
  value: 'standard__recordPage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_RECORD_REL_PAGE = {
  label: 'Record Relationship Page Type',
  value: 'standard__recordRelationshipPage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_WEB_PAGE = {
  label: 'Web Page Type',
  value: 'standard__webPage',
  help: '',
  url: ''
};

export const MODULE_PAGEREFS = [
  MODULE_PAGEREF_APP,
  MODULE_PAGEREF_LIGHTNING_COMPONENT,
  MODULE_PAGEREF_KNOWLEDGE_ARTICLE,
  MODULE_PAGEREF_COMM_LOGIN,
  MODULE_PAGEREF_CMS_PAGE,
  MODULE_PAGEREF_EXP_NAMED_PAGE,
  MODULE_PAGEREF_STD_NAMED_PAGE,
  MODULE_PAGEREF_NAV_ITEM_PAGE,
  MODULE_PAGEREF_OBJ_PAGE,
  MODULE_PAGEREF_RECORD_PAGE,
  MODULE_PAGEREF_RECORD_REL_PAGE,
  MODULE_PAGEREF_WEB_PAGE
];

/* ===== END PageReferences ===== */
export const MODULE_NAVIGATION_MIXIN_NAVIGATE = {
  label: 'NavigationMixin.Navigate',
  value: 'NavigationMixin_Navigate',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_navigate_page_types',
  submoduleLabel: 'PageReference Types',
  submoduleUrl:
    'https://developer.salesforce.com/docs/component-library/documentation/lwc/reference_page_reference_type',
  submodules: MODULE_PAGEREFS.map((m) => {
    return {
      ...m,
      id: `NavigationMixin_Navigate-${m.value}`
    };
  })
};
export const MODULE_NAVIGATION_MIXIN_GENERATE_URL = {
  label: 'NavigationMixin.GenerateUrl',
  value: 'NavigationMixin_GenerateUrl',
  help: '',
  url: '',
  submoduleLabel: 'PageReference Types',
  submoduleUrl:
    'https://developer.salesforce.com/docs/component-library/documentation/lwc/reference_page_reference_type',
  submodules: MODULE_PAGEREFS.map((m) => {
    return {
      ...m,
      id: `NavigationMixin_GenerateUrl-${m.value}`
    };
  })
};
export const MODULE_CURRENT_PAGE_REFERENCE = {
  label: '@wire CurrentPageReference',
  value: 'currentPageReference',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_navigate_default'
};

/* ===== uiRecordApi modules ===== */

export const MODULE_UI_RECORD_API_CREATE_RECORD = {
  label: 'createRecord',
  value: 'createRecord',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_create_record'
};
export const MODULE_UI_RECORD_API_CREATE_RECORD_INPUT_FILTERED_BY_EDITED_FIELDS =
  {
    label: 'createRecordInputFilteredByEditedFields',
    value: 'createRecordInputFilteredByEditedFields',
    help: '',
    url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_create_record_input_update'
  };
export const MODULE_UI_RECORD_API_DELETE_RECORD = {
  label: 'deleteRecord',
  value: 'deleteRecord',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_delete_record'
};

export const MODULE_UI_RECORD_API_GENERATE_RECORD_INPUT_FOR_CREATE = {
  label: 'generateRecordInputForCreate',
  value: 'generateRecordInputForCreate',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_generate_record_input_create'
};
export const MODULE_UI_RECORD_API_GENERATE_RECORD_INPUT_FOR_UPDATE = {
  label: 'generateRecordInputForUpdate',
  value: 'generateRecordInputForUpdate',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_generate_record_input_update'
};
export const MODULE_UI_RECORD_API_GET_FIELD_VALUE = {
  label: 'getFieldValue',
  value: 'getFieldValue',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_get_field_value'
};

export const MODULE_UI_RECORD_API_GET_FIELD_DISPLAY_VALUE = {
  label: 'getFieldDisplayValue',
  value: 'getFieldDisplayValue',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_get_field_display_value'
};
export const MODULE_UI_RECORD_API_GET_RECORD = {
  label: 'getRecord',
  value: 'getRecord',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_wire_adapters_record',
  preferences: [
    {
      label: '@wire',
      id: 'getRecord_propertyOrFunction',
      value: 'getRecord_propertyOrFunction_function',
      help: '',
      url: '',
      options: [
        {
          value: 'getRecord_propertyOrFunction_property',
          label: 'Property'
        },
        {
          value: 'getRecord_propertyOrFunction_function',
          label: 'Function'
        }
      ]
    },
    {
      label: '@wire params',
      id: 'getRecord_fieldsOrLayoutTypes',
      value: 'getRecord_fieldsOrLayoutTypes_fields',
      help: '',
      url: '',
      options: [
        {
          value: 'getRecord_fieldsOrLayoutTypes_fields',
          label: 'fields'
        },
        {
          value: 'getRecord_fieldsOrLayoutTypes_layoutTypes',
          label: 'layoutTypes'
        }
      ]
    }
  ]
};
export const MODULE_UI_RECORD_API_GET_RECORD_CREATE_DEFAULTS = {
  label: 'getRecordCreateDefaults',
  value: 'getRecordCreateDefaults',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_wire_adapters_create_record_values'
};

export const MODULE_UI_RECORD_API_GET_RECORD_NOTIFY_CHANGE = {
  label: 'getRecordNotifyChange',
  value: 'getRecordNotifyChange',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_get_record_notify'
};

export const MODULE_UI_RECORD_API_GET_RECORD_UI = {
  label: 'getRecordUi',
  value: 'getRecordUi',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_wire_adapters_record_ui'
};

export const MODULE_UI_RECORD_API_UPDATE_RECORD = {
  label: 'updateRecord',
  value: 'updateRecord',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_update_record'
};

/* ===== END uiRecordApi modules ===== */

export const MODULE_LABEL = {
  label: 'Label',
  value: 'label',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_labels'
};
export const MODULE_FORM_FACTOR = {
  label: 'Form Factor',
  value: 'formFactor',
  help: 'The form factor of the hardware the browser is running on',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/create_client_form_factor'
};
export const MODULE_REGION_WIDTH = {
  label: '@api flexipageRegionWidth',
  value: 'flexipageRegionWidth',
  help: 'Make the component aware of its region width',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_width_aware'
};
export const MODULE_RECORD_ID = {
  // need to add in metadata in lightningCommunity__Default target
  label: '@api recordId',
  value: 'recordId',
  help: 'Make the component aware of its record context',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_record_context'
};
export const MODULE_OBJECT_API_NAME = {
  label: '@api objectApiName',
  value: 'objectApiName',
  help: 'Make the component aware of its object context',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_object_context'
};

export const MODULE_USER_PERMISSION = {
  label: 'User Permission',
  value: 'userPermission',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_get_permissions'
};

export const MODULE_CUSTOM_PERMISSION = {
  label: 'Custom Permission',
  value: 'customPermission',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_get_permissions'
};

export const MODULE_USER_ID = {
  label: 'User Id',
  value: 'userId',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_current_user'
};
export const MODULE_USER_IS_GUEST = {
  label: 'User Is Guest User',
  value: 'userIsGuest',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_current_user'
};

export const MODULE_EXP_SITE_ID = {
  label: 'Experience Cloud Site Id',
  value: 'experienceCloudSiteId',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_community_info'
};
export const MODULE_EXP_SITE_BASE_PATH = {
  label: 'Experience Cloud Site Base Path',
  value: 'experienceCloudSiteBasePath',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_community_info'
};
export const MODULE_STATIC_RESOURCES = {
  label: 'Static Resources',
  value: 'staticResources',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_resources'
};
export const MODULE_CONTENT_ASSET_FILES = {
  label: 'Content Asset Files',
  value: 'contentAssetFiles',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_content_assets'
};

export const MODULE_I18N_LANG = {
  label: 'Language',
  value: 'i18n_lang',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DIR = {
  label: 'Text Direction',
  value: 'i18n_dir',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_LOCALE = {
  label: 'Locale',
  value: 'i18n_locale',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_CURRENCY_CODE = {
  label: 'Currency code',
  value: 'i18n_currency',
  help: 'e.g.: CAD',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_FIRST_DAY_OF_WEEK = {
  label: 'First day of the week',
  value: 'i18n_fdow',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DATETIME_SHORT_DATE_FORMAT = {
  label: 'Date format : Short',
  value: 'i18n_date_short',
  help: 'e.g.: MM/dd/yyyy',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DATETIME_MEDIUM_DATE_FORMAT = {
  label: 'Date format : Medium',
  value: 'i18n_date_medium',
  help: 'e.g.: MMM d, yyyy',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DATETIME_LONG_DATE_FORMAT = {
  label: 'Date format : Long',
  value: 'i18n_date_long',
  help: 'e.g.: MMMM d, yyyy',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DATETIME_SHORT_DATETIME_FORMAT = {
  label: 'DateTime format : Short',
  value: 'i18n_datetime_short',
  help: 'e.g.: MM/dd/yyyy h:mm a',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DATETIME_MEDIUM_DATETIME_FORMAT = {
  label: 'DateTime format : Medium',
  value: 'i18n_datetime_medium',
  help: 'e.g.: MMM d, yyyy hmm:ss a',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DATETIME_SHORT_TIME_FORMAT = {
  label: 'Time format : Short',
  value: 'i18n_time_short',
  help: 'e.g.: h:mm a',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DATETIME_LONG_TIME_FORMAT = {
  label: 'Time format : Long',
  value: 'i18n_time_long',
  help: 'e.g.: h:mmss a',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_CURRENCY_FORMAT = {
  label: 'Currency format',
  value: 'i18n_currency_format',
  help: 'e.g.: #, ##0.00',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_CURRENCY_SYMBOL = {
  label: 'Currency symbol',
  value: 'i18n_currency_symbol',
  help: 'e.g.: $',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_DECIMAL_SEPARATOR = {
  label: 'Decimal separator',
  value: 'i18n_decimal_separator',
  help: 'e.g.: .',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_GROUPING_SEPARATOR = {
  label: 'Grouping separator',
  value: 'i18n_grouping_separator',
  help: 'e.g.: ,',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_NUMBER_FORMAT = {
  label: 'Number format',
  value: 'i18n_number_format',
  help: 'e.g.: #, ##0.###',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_PERCENT_FORMAT = {
  label: 'Percent format',
  value: 'i18n_percent_format',
  help: 'e.g.: #, ###0%',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};
export const MODULE_I18N_TIME_ZONE = {
  label: 'Time zone',
  value: 'i18n_time_zone',
  help: 'e.g.: America/Los_Angeles',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};

export const MODULE_BARCODE_SCANNER = {
  label: 'Barcode Scanner',
  value: 'barcodeScanner',
  help: '',
  url: ''
};
/* ==== PAGE REFERENCE ATTRIBUTES ==== */
export const PAGEREF_ATTR_APP_PAGE = `{\n\t\t\ttype: 'standard__app',\n\t\t\tattributes: {\n\t\t\t\tappTarget: '/* appId or appDeveloperName of app */',\n\t\t\t\tpageRef: { // Optional\n\t\t\t\t\t// PageReference\n\t\t\t\t}\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_LIGHTNING_COMPONENT_PAGE = `{\n\t\t\ttype: 'standard__component',\n\t\t\tattributes: {\n\t\t\t\tcomponentName: 'namespace__componentName'\n\t\t\t}\n\t\t\tstate: {\n\t\t\t\t// You can pass any key and value in the state object. \n\t\t\t\t// The key must include a namespace, and the value must be a string.\n\t\t\t\t// namespace__key: 'value'\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_KNOWLEDGE_ARTICLE_PAGE = `{\n\t\t\ttype: 'standard__knowledgeArticlePage',\n\t\t\tattributes: {\n\t\t\t\tarticleType: '/* The API Name of the knowledge article record */',\n\t\t\t\turlName: '/* The value of urlName field of KnowledgeArticleVersion */'\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_COMM_LOGIN_PAGE = `{\n\t\t\ttype: 'comm__loginPage',\n\t\t\tattributes: {\n\t\t\t\tactionName: '{ login | logout }'\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_CMS_PAGE = `{\n\t\t\ttype: 'standard__managedContentPage',\n\t\t\tattributes: {\n\t\t\t\tcontentTypeName: '{ news | cms_document | cms_image | cms_video | custom }',\n\t\t\t\tcontentKey: '/* The unique content key that identifies CMS content. */'\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_EXP_NAMED_PAGE = `{\n\t\t\ttype: 'comm__namedPage',\n\t\t\tattributes: {\n\t\t\t\tname: '{ Home | Account_Management | Contact_Support | Error | Login | My_Account | Top_Articles | Topic_Catalog | Custom_Page_Api_Name }'\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_STD_NAMED_PAGE = `{\n\t\t\ttype: 'standard__namedPage',\n\t\t\tattributes: {\n\t\t\t\tpageName: '{ home | chatter | today | dataAssessment | filePreview }',\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_NAV_ITEM_PAGE = `{\n\t\t\ttype: 'standard__navItemPage',\n\t\t\tattributes: {\n\t\t\t\tapiName: '/* customTabName */',\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_OBJ_PAGE = `{\n\t\t\ttype: 'standard__objectPage',\n\t\t\tattributes: {\n\t\t\t\tactionName: '{ home | list | new }',\n\t\t\t\tobjectApiName: '/* The API name of the standard or custom object */'\n\t\t\t},\n\t\t\tstate: {\n\t\t\t\t// filterName: 'Recent',\n\t\t\t\t// defaultFieldValues: 'FieldApiName=value,FieldApiName2=value2',\n\t\t\t\t// nooverride: '1'\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_RECORD_PAGE = `{\n\t\t\ttype: 'standard__recordPage',\n\t\t\tattributes: {\n\t\t\t\tactionName: '{ view | clone | edit }',\n\t\t\t\trecordId: '',\n\t\t\t\t// objectApiName: ''\n\t\t\t},\n\t\t\tstate: {\n\t\t\t\t// nooverride: '1'\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_RECORD_REL_PAGE = `{\n\t\t\ttype: 'standard__recordRelationshipPage',\n\t\t\tattributes: {\n\t\t\t\tactionName: 'view',\n\t\t\t\trecordId: '',\n\t\t\t\trelationshipApiName: '',\n\t\t\t\t// objectApiName: ''\n\t\t\t}\n\t\t}`;
export const PAGEREF_ATTR_WEB_PAGE = `{\n\t\t\ttype: 'standard__webPage',\n\t\t\tattributes: {\n\t\t\t\turl: 'https://salesforce.com'\n\t\t\t}\n\t\t}`;

export const MODULES_UI_RECORD_API = [
  MODULE_UI_RECORD_API_CREATE_RECORD,
  // MODULE_UI_RECORD_API_CREATE_RECORD_INPUT_FILTERED_BY_EDITED_FIELDS,
  MODULE_UI_RECORD_API_DELETE_RECORD,
  // MODULE_UI_RECORD_API_GENERATE_RECORD_INPUT_FOR_CREATE,
  // MODULE_UI_RECORD_API_GENERATE_RECORD_INPUT_FOR_UPDATE,
  // MODULE_UI_RECORD_API_GET_FIELD_VALUE,
  // MODULE_UI_RECORD_API_GET_FIELD_DISPLAY_VALUE,
  MODULE_UI_RECORD_API_GET_RECORD,
  // MODULE_UI_RECORD_API_GET_RECORD_CREATE_DEFAULTS,
  // MODULE_UI_RECORD_API_GET_RECORD_NOTIFY_CHANGE,
  // MODULE_UI_RECORD_API_GET_RECORD_UI,
  MODULE_UI_RECORD_API_UPDATE_RECORD
];

export const MODULES_WIRE = [MODULE_UI_RECORD_API_GET_RECORD];

export const MODULE_IMPORTS = [
  {
    category: CATEGORY_NONE,
    modules: [
      MODULE_TOAST,
      MODULE_NAVIGATION_MIXIN_NAVIGATE,
      MODULE_NAVIGATION_MIXIN_GENERATE_URL,
      MODULE_CURRENT_PAGE_REFERENCE,
      MODULE_LABEL
    ]
  },
  {
    category: CATEGORY_CONTEXT,
    modules: [
      MODULE_RECORD_ID,
      MODULE_OBJECT_API_NAME,
      MODULE_REGION_WIDTH,
      MODULE_FORM_FACTOR
    ]
  },
  {
    category: CATEGORY_UI_RECORD_API,
    modules: MODULES_UI_RECORD_API
  },
  {
    category: CATEGORY_USER,
    modules: [
      MODULE_USER_PERMISSION,
      MODULE_CUSTOM_PERMISSION,
      MODULE_USER_ID,
      MODULE_USER_IS_GUEST
    ]
  },
  {
    category: CATEGORY_EXPERIENCE_CLOUD,
    modules: [MODULE_EXP_SITE_ID, MODULE_EXP_SITE_BASE_PATH]
  },
  {
    category: CATEGORY_FILE,
    modules: [MODULE_STATIC_RESOURCES, MODULE_CONTENT_ASSET_FILES]
  },
  {
    category: CATEGORY_I18N,
    modules: [
      MODULE_I18N_LANG,
      MODULE_I18N_DIR,
      MODULE_I18N_LOCALE,
      MODULE_I18N_CURRENCY_CODE,
      MODULE_I18N_CURRENCY_FORMAT,
      MODULE_I18N_CURRENCY_SYMBOL,
      MODULE_I18N_TIME_ZONE,
      MODULE_I18N_NUMBER_FORMAT,
      MODULE_I18N_PERCENT_FORMAT,
      MODULE_I18N_DECIMAL_SEPARATOR,
      MODULE_I18N_GROUPING_SEPARATOR,
      MODULE_I18N_FIRST_DAY_OF_WEEK,
      MODULE_I18N_DATETIME_SHORT_DATE_FORMAT,
      MODULE_I18N_DATETIME_MEDIUM_DATE_FORMAT,
      MODULE_I18N_DATETIME_LONG_DATE_FORMAT,
      MODULE_I18N_DATETIME_SHORT_DATETIME_FORMAT,
      MODULE_I18N_DATETIME_MEDIUM_DATETIME_FORMAT,
      MODULE_I18N_DATETIME_SHORT_TIME_FORMAT,
      MODULE_I18N_DATETIME_LONG_TIME_FORMAT
    ]
  },
  {
    category: CATEGORY_SPECIAL,
    modules: [MODULE_BARCODE_SCANNER]
  }
];
