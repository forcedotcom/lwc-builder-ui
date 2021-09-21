/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Submodules : Multi select modules related to the parent module.
 * Variants : Pick one.
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

/* MODULES */
export const MODULE_TOAST = {
  label: 'Toast Notifications',
  value: 'toast',
  help: 'A toast notification pops up to alert users of a success, error, or warning',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/lwc/use_toast'
};

/* PageReferences */
export const MODULE_PAGEREF_APP = {
  label: 'App Type',
  value: 'standard__app',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_LIGHTNING_COMPONENT = {
  label: 'Lightning Component Type',
  value: 'standard__component',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_KNOWLEDGE_ARTICLE = {
  label: 'Knowledge Article Page Type',
  value: 'standard__knowledgeArticlePage',
  help: '',
  url: ''
};
export const MODULE_PAGEREF_COMM_LOGIN = {
  label: 'Experience Cloud Site Login Page Type',
  value: 'comm__loginPage',
  help: '',
  url: ''
};
export const MODULE_NAVIGATION_MIXIN_NAVIGATE = {
  label: 'NavigationMixin.Navigate',
  value: 'NavigationMixin_Navigate',
  help: '',
  url: '',
  submoduleLabel: 'PageReference Types',
  submodules: [
    {
      ...MODULE_PAGEREF_APP,
      id: `NavigationMixin_Navigate-${MODULE_PAGEREF_APP.value}`
    },
    {
      ...MODULE_PAGEREF_LIGHTNING_COMPONENT,
      id: `NavigationMixin_Navigate-${MODULE_PAGEREF_LIGHTNING_COMPONENT.value}`
    },
    {
      ...MODULE_PAGEREF_KNOWLEDGE_ARTICLE,
      id: `NavigationMixin_Navigate-${MODULE_PAGEREF_KNOWLEDGE_ARTICLE.value}`
    },
    {
      ...MODULE_PAGEREF_COMM_LOGIN,
      id: `NavigationMixin_Navigate-${MODULE_PAGEREF_COMM_LOGIN.value}`
    }
  ]
};
export const MODULE_NAVIGATION_MIXIN_GENERATE_URL = {
  label: 'NavigationMixin.GenerateUrl',
  value: 'NavigationMixin_GenerateUrl',
  help: '',
  url: '',
  submoduleLabel: 'PageReference Types',
  submodules: [
    {
      ...MODULE_PAGEREF_APP,
      id: `NavigationMixin_GenerateUrl-${MODULE_PAGEREF_APP.value}`
    },
    {
      ...MODULE_PAGEREF_LIGHTNING_COMPONENT,
      id: `NavigationMixin_GenerateUrl-${MODULE_PAGEREF_LIGHTNING_COMPONENT.value}`
    },
    {
      ...MODULE_PAGEREF_KNOWLEDGE_ARTICLE,
      id: `NavigationMixin_GenerateUrl-${MODULE_PAGEREF_KNOWLEDGE_ARTICLE.value}`
    },
    {
      ...MODULE_PAGEREF_COMM_LOGIN,
      id: `NavigationMixin_GenerateUrl-${MODULE_PAGEREF_COMM_LOGIN.value}`
    }
  ]
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
  variantsLabel: 'Format',
  variants: [
    // Imperative
    // Property
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
  url: ''
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
  url: ''
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
  label: 'User ID',
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
  label: 'Experience Cloud Site ID',
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
  url: ''
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
export const MODULE_I18N_CURRENCY = {
  label: 'Currency',
  value: 'i18n_currency',
  help: '',
  url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n'
};

export const MODULE_BARCODE_SCANNER = {
  label: 'Barcode Scanner',
  value: 'barcodeScanner',
  help: '',
  url: ''
};

export const MODULE_IMPORTS = [
  {
    category: CATEGORY_NONE,
    modules: [
      MODULE_TOAST,
      MODULE_NAVIGATION_MIXIN_NAVIGATE,
      MODULE_NAVIGATION_MIXIN_GENERATE_URL,
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
    modules: [
      MODULE_UI_RECORD_API_CREATE_RECORD,
      MODULE_UI_RECORD_API_CREATE_RECORD_INPUT_FILTERED_BY_EDITED_FIELDS,
      MODULE_UI_RECORD_API_DELETE_RECORD,
      MODULE_UI_RECORD_API_GENERATE_RECORD_INPUT_FOR_CREATE,
      MODULE_UI_RECORD_API_GENERATE_RECORD_INPUT_FOR_UPDATE,
      MODULE_UI_RECORD_API_GET_FIELD_VALUE,
      MODULE_UI_RECORD_API_GET_FIELD_DISPLAY_VALUE,
      MODULE_UI_RECORD_API_GET_RECORD,
      MODULE_UI_RECORD_API_GET_RECORD_CREATE_DEFAULTS,
      MODULE_UI_RECORD_API_GET_RECORD_NOTIFY_CHANGE,
      MODULE_UI_RECORD_API_GET_RECORD_UI,
      MODULE_UI_RECORD_API_UPDATE_RECORD
    ]
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
      MODULE_I18N_CURRENCY
    ]
  },
  {
    category: CATEGORY_SPECIAL,
    modules: [MODULE_BARCODE_SCANNER]
  }
];
