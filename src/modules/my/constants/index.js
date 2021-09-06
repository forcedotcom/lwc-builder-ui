/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export const LATEST_API_VERSION = '52.0';

export const DEFAULT_BASICS = {
  componentName: '',
  apiVersion: LATEST_API_VERSION,
  withHtml: true,
  withCss: true,
  withSvg: false,
  withTest: false,
  isExposed: true,
  masterLabel: '',
  description: '',
  svgFileName: '',
  svgFileContent: ''
};

export const DEFAULT_PROPERTY = {
  name: '',
  targets: [],
  selectedTargets: [],
  type: '',
  description: '',
  label: '',
  default: '',
  apexClassName: '',
  sObjectName: '',
  min: '',
  max: '',
  placeholder: '',
  required: false,
  flowInput: true,
  flowOutput: true,
  datasource: '',
  cmsFilters: []
};

export const CMS_FILTERS = [
  { id: 'cms_document', name: 'CMS Document', value: 'cms_document' },
  { id: 'cms_image', name: 'CMS Image', value: 'cms_image' },
  { id: 'cms_video', name: 'CMS Video', value: 'cms_video' },
  { id: 'news', name: 'News', value: 'news' }
];
