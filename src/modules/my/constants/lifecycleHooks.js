/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export const LIFECYCLE_HOOKS = [
  {
    value: 'constructor',
    label: 'constructor',
    help: '',
    url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_lifecycle_hooks_created'
  },
  {
    value: 'connectedCallback',
    label: 'connectedCallback',
    help: '',
    url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_lifecycle_hooks_dom'
  },
  {
    value: 'disconnectedCallback',
    label: 'disconnectedCallback',
    help: '',
    url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_lifecycle_hooks_dom'
  },
  {
    value: 'renderedCallback',
    label: 'renderedCallback',
    help: '',
    url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_lifecycle_hooks_rendered',
    options: [
      {
        value: 'initialRenderCheck',
        label: 'Initial Render Check',
        help: '',
        url: ''
      }
    ]
  },
  {
    value: 'errorCallback',
    label: 'errorCallback',
    help: '',
    url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_lifecycle_hooks_error'
  }
];
