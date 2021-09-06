/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { DEFAULT_BASICS } from './index';
import { LIFECYCLE_HOOKS } from './lifecycleHooks';
import { MODULE_IMPORTS } from './modules';
import { TARGETS, OBJ_TARGETS } from './target';

export const EXPECTED_TARGETS = Object.values(TARGETS);
export const EXPECTED_INPUTS = {
  ...DEFAULT_BASICS,
  properties: [],
  sobjects: [],
  targets: OBJ_TARGETS(),
  modules: MODULE_IMPORTS,
  customPropertyEditor: {},
  lifecycleHooks: LIFECYCLE_HOOKS,
  standardComponents: [],
  experienceCloudSettings: []
};
