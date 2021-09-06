/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const CATEGORY_NONE = {
  label: '',
  id: 'none'
};
const CATEGORY_UI = {
  label: 'UI',
  id: 'ui'
};
const CATEGORY_EXPERIENCE_CLOUD = {
  label: 'Experience Cloud',
  id: 'exp'
};
const CATEGORY_I18N = {
  label: 'Internationalization i18n',
  id: 'i18n'
};
const CATEGORY_USER = {
  label: 'User',
  id: 'user'
};
const CATEGORY_CONTEXT = {
  label: 'Context',
  id: 'context'
};
const CATEGORY_FILE = {
  label: 'File',
  id: 'file'
};

const CATEGORY_SPECIAL = {
  label: 'Spécialité',
  id: 'special'
};

export const MODULE_IMPORTS = [
  {
    category: CATEGORY_NONE,
    modules: [
      {
        label: 'Toast Notifications',
        value: 'toast',
        help: 'A toast notification pops up to alert users of a success, error, or warning',
        url: '',
        checked: false
      },
      {
        label: 'Page Reference',
        value: 'pageReference',
        help: '',
        url: '',
        checked: false
      },
      {
        label: 'NavigationMixin',
        value: 'NavigationMixin',
        help: '',
        url: '',
        checked: false
      },
      {
        label: 'UI Record API',
        value: 'uiRecordApi',
        help: '',
        url: '',
        checked: false
      },
      {
        label: 'Label',
        value: 'label',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_labels',
        checked: false
      }
    ]
  },
  {
    category: CATEGORY_CONTEXT,
    modules: [
      {
        label: 'Form Factor',
        value: 'formFactor',
        help: 'The form factor of the hardware the browser is running on',
        url: '',
        checked: false
      },
      {
        label: 'Flexipage Region Width',
        value: 'flexipageRegionWidth',
        help: 'width-aware',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_width_aware',
        checked: false
      },
      {
        // need to add in metadata in lightningCommunity__Default target
        label: 'Record Id',
        value: 'recordId',
        help: 'Make the component aware of its record context',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_record_context',
        checked: false
      },
      {
        label: 'sObject API Name',
        value: 'objectApiName',
        help: 'Make a component aware of its object context',
        url: '',
        checked: false
      }
    ]
  },
  {
    category: CATEGORY_USER,
    modules: [
      {
        label: 'User Permission',
        value: 'userPermission',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_get_permissions',
        checked: false
      },
      {
        label: 'Current User ID',
        value: 'userId',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_current_user',
        checked: false
      },
      {
        label: 'Current User Is Guest User',
        value: 'userIsGuest',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_current_user',
        checked: false
      }
    ]
  },
  {
    category: CATEGORY_UI,
    modules: []
  },
  {
    category: CATEGORY_EXPERIENCE_CLOUD,
    modules: [
      {
        label: 'Experience Cloud ID',
        value: 'experienceCloudId',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_community_info',
        checked: false
      },
      {
        label: 'Experience Cloud Base Path',
        value: 'experienceCloudBasePath',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_community_info',
        checked: false
      }
    ]
  },
  {
    category: CATEGORY_FILE,
    modules: [
      {
        label: 'Static Resources',
        value: 'staticResources',
        help: '',
        url: '',
        checked: false
      },
      {
        label: 'Content Asset Files',
        value: 'contentAssetFiles',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_content_assets',
        checked: false
      }
    ]
  },
  {
    category: CATEGORY_I18N,
    modules: [
      {
        label: 'Language',
        value: 'i18n_lang',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n',
        checked: false
      },
      {
        label: 'Text Direction',
        value: 'i18n_dir',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n',
        checked: false
      },
      {
        label: 'Locale',
        value: 'i18n_locale',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n',
        checked: false
      },
      {
        label: 'Currency',
        value: 'i18n_currency',
        help: '',
        url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n',
        checked: false
      }
    ]
  },
  {
    category: CATEGORY_SPECIAL,
    modules: [
      {
        label: 'Barcode Scanner',
        value: 'barcodeScanner',
        help: '',
        url: '',
        checked: false
      }
    ]
  }
];
