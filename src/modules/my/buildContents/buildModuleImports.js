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
  MODULE_BARCODE_SCANNER
} from '../constants/modules';

export const buildImportsForJs = (modules) => {
  return Object.values(modules)
    .filter((m) => m.checked)
    .map((m) => {
      switch (m.value) {
        case MODULE_TOAST.value:
          return `import { ShowToastEvent } from 'lightning/platformShowToastEvent';`;
        case MODULE_NAVIGATION_MIXIN_NAVIGATE.value:
        case MODULE_NAVIGATION_MIXIN_GENERATE_URL.value:
          return `import { NavigationMixin } from 'lightning/navigation';`;
        case MODULE_FORM_FACTOR.value:
          return `import FORM_FACTOR from '@salesforce/client/formFactor';`;
        case MODULE_USER_ID.value:
          return `import USER_ID from '@salesforce/user/Id';`;
        case MODULE_USER_IS_GUEST.value:
          return `import USER_IS_GUEST from '@salesforce/user/isGuest';`;
        case MODULE_USER_PERMISSION.value:
          return `import [HAS_USER_PERM] from '@salesforce/userPermission/[PermissionName]';`;
        case MODULE_CUSTOM_PERMISSION.value:
          return `import [HAS_CUSTOM_PERM] from '@salesforce/customPermission/[PermissionName]';`;
        case MODULE_STATIC_RESOURCES.value:
          return `import [STATIC_RESOURCE] from '@salesforce/resourceUrl/[NameOfStaticResource]';`;
        case MODULE_CONTENT_ASSET_FILES.value:
          return `import [CONTENT_ASSET] from '@salesforce/contentAssetUrl/[NameOfAssetFile]';`;
        case MODULE_EXP_SITE_ID.value:
          return `import EXP_SITE_NETWORK_ID from '@salesforce/community/Id';`;
        case MODULE_EXP_SITE_BASE_PATH.value:
          return `import EXP_SITE_BASE_PATH from '@salesforce/community/basePath';`;
        case MODULE_LABEL.value:
          return `import [LABEL_NAME] from '@salesforce/label/[Namespace.LabelName]';`;
        case MODULE_BARCODE_SCANNER.value:
          return `import { getBarcodeScanner } from 'lightning/mobileCapabilities';`;
        default:
          return null;
      }
    })
    .filter((m, index, self) => !!m && self.indexOf(m) === index);
};
