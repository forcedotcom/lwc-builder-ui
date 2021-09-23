/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {
  MODULE_NAVIGATION_MIXIN_NAVIGATE,
  MODULE_NAVIGATION_MIXIN_GENERATE_URL,
  MODULE_TOAST,
  MODULE_FORM_FACTOR,
  MODULE_USER_ID,
  MODULE_USER_IS_GUEST,
  MODULE_USER_PERMISSION,
  MODULE_CUSTOM_PERMISSION,
  MODULE_STATIC_RESOURCES,
  MODULE_CONTENT_ASSET_FILES,
  MODULE_EXP_SITE_ID,
  MODULE_EXP_SITE_BASE_PATH,
  MODULE_LABEL,
  MODULE_BARCODE_SCANNER,
  MODULES_UI_RECORD_API,
  MODULES_WIRE,
  MODULE_CURRENT_PAGE_REFERENCE,
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
} from '../constants/modules';

export const buildImportsForJs = (modules) => {
  const imports = Object.values(modules)
    .filter((m) => m.checked)
    .map((m) => {
      switch (m.value) {
        case MODULE_TOAST.value:
          return `import { ShowToastEvent } from 'lightning/platformShowToastEvent';`;
        case MODULE_FORM_FACTOR.value:
          return `import FORM_FACTOR from '@salesforce/client/formFactor'; // Large | Medium | Small`;
        case MODULE_USER_ID.value:
          return `import USER_ID from '@salesforce/user/Id';`;
        case MODULE_USER_IS_GUEST.value:
          return `import USER_IS_GUEST from '@salesforce/user/isGuest';`;
        case MODULE_USER_PERMISSION.value:
          return `import HAS_USER_PERM from '@salesforce/userPermission/{PermissionName}';`;
        case MODULE_CUSTOM_PERMISSION.value:
          return `import HAS_CUSTOM_PERM from '@salesforce/customPermission/{PermissionName}';`;
        case MODULE_STATIC_RESOURCES.value:
          return `import STATIC_RESOURCE from '@salesforce/resourceUrl/{NameOfStaticResource}';`;
        case MODULE_CONTENT_ASSET_FILES.value:
          return `import CONTENT_ASSET from '@salesforce/contentAssetUrl/{NameOfAssetFile}';`;
        case MODULE_EXP_SITE_ID.value:
          return `import EXP_SITE_NETWORK_ID from '@salesforce/community/Id';`;
        case MODULE_EXP_SITE_BASE_PATH.value:
          return `import EXP_SITE_BASE_PATH from '@salesforce/community/basePath';`;
        case MODULE_LABEL.value:
          return `import LABEL_NAME from '@salesforce/label/{Namespace.LabelName}';`;
        case MODULE_I18N_LANG.value:
          return `import LANG from '@salesforce/i18n/lang';`;
        case MODULE_I18N_DIR.value:
          return `import DIR from '@salesforce/i18n/dir';`;
        case MODULE_I18N_LOCALE.value:
          return `import LOCALE from '@salesforce/i18n/locale';`;
        case MODULE_I18N_CURRENCY_CODE.value:
          return `import CURRENCY_CODE from '@salesforce/i18n/currency';`;
        case MODULE_I18N_CURRENCY_FORMAT.value:
          return `import CURRENCY_FORMAT from '@salesforce/i18n/number.currencyFormat';`;
        case MODULE_I18N_CURRENCY_SYMBOL.value:
          return `import CURRENCY_SYMBOL from '@salesforce/i18n/number.currencySymbol';`;
        case MODULE_I18N_TIME_ZONE.value:
          return `import TIME_ZONE from '@salesforce/i18n/timeZone';`;
        case MODULE_I18N_NUMBER_FORMAT.value:
          return `import NUMBER_FORMAT from '@salesforce/i18n/number.numberFormat';`;
        case MODULE_I18N_PERCENT_FORMAT.value:
          return `import PERCENT_FORMAT from '@salesforce/i18n/number.percentFormat';`;
        case MODULE_I18N_DECIMAL_SEPARATOR.value:
          return `import DECIMAL_SEPARATOR from '@salesforce/i18n/number.decimalSeparator';`;
        case MODULE_I18N_GROUPING_SEPARATOR.value:
          return `import GROUPING_SEPARATOR from '@salesforce/i18n/number.groupingSeparator';`;
        case MODULE_I18N_FIRST_DAY_OF_WEEK.value:
          return `import FIRST_DAY_OF_WEEK from '@salesforce/i18n/firstDayOfWeek';`;
        case MODULE_I18N_DATETIME_SHORT_DATE_FORMAT.value:
          return `import SHORT_DATE_FORMAT from '@salesforce/i18n/dateTime.shortDateFormat';`;
        case MODULE_I18N_DATETIME_MEDIUM_DATE_FORMAT.value:
          return `import MEDIUM_DATE_FORMAT from '@salesforce/i18n/dateTime.mediumDateFormat';`;
        case MODULE_I18N_DATETIME_LONG_DATE_FORMAT.value:
          return `import LONG_DATE_FORMAT from '@salesforce/i18n/dateTime.longDateFormat';`;
        case MODULE_I18N_DATETIME_SHORT_DATETIME_FORMAT.value:
          return `import SHORT_DATETIME_FORMAT from '@salesforce/i18n/dateTime.shortDateTimeFormat';`;
        case MODULE_I18N_DATETIME_MEDIUM_DATETIME_FORMAT.value:
          return `import MEDIUM_DATETIME_FORMAT from '@salesforce/i18n/dateTime.mediumDateTimeFormat';`;
        case MODULE_I18N_DATETIME_SHORT_TIME_FORMAT.value:
          return `import SHORT_TIME_FORMAT from '@salesforce/i18n/dateTime.shortTimeFormat';`;
        case MODULE_I18N_DATETIME_LONG_TIME_FORMAT.value:
          return `import LONG_TIME_FORMAT from '@salesforce/i18n/dateTime.longTimeFormat';`;
        case MODULE_BARCODE_SCANNER.value:
          return `import { getBarcodeScanner } from 'lightning/mobileCapabilities';`;
        default:
          return null;
      }
    })
    .filter((m, index, self) => !!m && self.indexOf(m) === index);

  // lightning/navigate
  const navs = Object.values(modules).filter(
    (m) =>
      m.checked &&
      (m.value === MODULE_CURRENT_PAGE_REFERENCE.value ||
        m.value === MODULE_NAVIGATION_MIXIN_NAVIGATE.value ||
        m.value === MODULE_NAVIGATION_MIXIN_GENERATE_URL.value)
  );
  if (navs && navs.length > 0) {
    const navMods = [
      ...new Set(
        navs.reduce((mods, m) => {
          switch (m.value) {
            case MODULE_NAVIGATION_MIXIN_NAVIGATE.value:
            case MODULE_NAVIGATION_MIXIN_GENERATE_URL.value:
              mods.push('NavigationMixin');
              break;
            case MODULE_CURRENT_PAGE_REFERENCE.value:
              mods.push('CurrentPageReference');
              break;
            default:
              break;
          }
          return mods;
        }, [])
      )
    ];
    imports.push(
      `import { ${navMods.join(', ')} } from 'lightning/navigation';`
    );
    // https://developer.salesforce.com/docs/component-library/bundle/lightning-page-reference-utils/documentation
    imports.push(
      `import { encodeDefaultFieldValues, decodeDefaultFieldValues } from 'lightning/pageReferenceUtils';`
    );
  }

  // UI Record API
  const uiRecordApi = Object.values(modules)
    .filter(
      (m) =>
        m.checked && MODULES_UI_RECORD_API.find((ui) => ui.value === m.value)
    )
    .map((m) => m.value)
    .join(', ');

  if (uiRecordApi) {
    imports.push(`import { ${uiRecordApi} } from 'lightning/uiRecordApi';`);
  }

  return imports;
};

export const checkWireModules = (modules) => {
  return !!Object.values(modules)
    .filter((m) => m.checked)
    .find((m) => MODULES_WIRE.find((wm) => wm.value === m.value));
};
