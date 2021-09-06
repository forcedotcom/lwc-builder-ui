/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, track } from 'lwc';
import { buildContents } from 'my/buildContents';
import { DEFAULT_BASICS } from '../constants';
import { TABS } from '../constants/tab';
import { MODULE_IMPORTS } from '../constants/modules';
import { TARGETS, NON_PROPERTY_TARGETS } from '../constants/target';
import {
  TYPE_BASICS,
  TYPE_PROPERTIES,
  TYPE_TARGETS,
  TYPE_EXPERIENCE_CLOUD,
  TYPE_CUSTOM_PROPERTY_EDITOR,
  TYPE_MODULES,
  TYPE_STANDARD_COMPONENTS,
  TYPE_LIFECYCLE_HOOKS,
  TYPE_SOBJECTS
} from '../constants/formEvents';
import { LIFECYCLE_HOOKS } from '../constants/lifecycleHooks';
export default class Form extends LightningElement {
  @track
  basics = DEFAULT_BASICS;
  @track
  targets = {};
  @track
  modules = [...MODULE_IMPORTS];
  @track
  standardComponents = [];
  @track
  properties = [];
  @track
  lifecycleHooks = [...LIFECYCLE_HOOKS];
  @track
  experienceCloudSettings = [];
  @track
  customPropertyEditor = {};
  @track
  sobjects = [];

  @track
  tabs = TABS;

  connectedCallback() {
    Object.values(TARGETS).forEach((t) => {
      this.targets[t.value] = {
        name: t.name,
        value: t.value,
        enabled: false,
        small: false,
        large: false,
        headlessAction: false,
        properties: [],
        sobjects: []
      };
    });
  }

  onClickTab(e) {
    this.tabs.forEach((t) => {
      if (t.id === e.detail) {
        t.isActive = true;
        t.isUnread = false;
      } else {
        t.isActive = false;
      }
    });
  }

  onUpdate(e) {
    const { type, value } = e.detail;
    switch (type) {
      case TYPE_BASICS:
        this.basics = { ...this.basics, ...value };
        break;
      case TYPE_TARGETS:
        this.targets = { ...this.targets, ...value };
        break;
      case TYPE_PROPERTIES:
        this.properties = value;
        break;
      case TYPE_SOBJECTS:
        this.sobjects = value;
        break;
      case TYPE_EXPERIENCE_CLOUD:
        this.experienceCloudSettings = value;
        break;
      case TYPE_CUSTOM_PROPERTY_EDITOR:
        this.customPropertyEditor = value;
        break;
      case TYPE_MODULES:
        this.modules = value;
        break;
      case TYPE_STANDARD_COMPONENTS:
        this.standardComponents = value;
        break;
      case TYPE_LIFECYCLE_HOOKS:
        this.lifecycleHooks = value;
        break;
      default:
        break;
    }
    this.updateTabStatus();
    this.fireUpdateEvent();
  }

  fireUpdateEvent() {
    const formatted = buildContents({
      ...this.basics,
      targets: this.targets,
      properties: this.properties,
      modules: this.modules,
      standardComponents: this.standardComponents,
      lifecycleHooks: this.lifecycleHooks,
      experienceCloudSettings: this.experienceCloudSettings,
      customPropertyEditor: this.customPropertyEditor,
      sobjects: this.sobjects
    });
    this.dispatchEvent(
      new CustomEvent('update', {
        detail: formatted
      })
    );
  }

  updateTabStatus() {
    // properties tab
    this.tabs.PROPERTIES.isVisible = this.hasPropertyTarget;
    // experience cloud
    // custom property editor
    this.tabs.CUSTOM_PROPERTY_EDITOR.isVisible =
      this.hasPropertyTarget && this.isFlowOnly;
    // sobjects
    this.tabs.SOBJECTS.isVisible =
      this.hasPropertyTarget && this.isRecordPageSelected;
  }

  get hasPropertyTarget() {
    return (
      Object.values(this.targets)
        .filter((t) => t.enabled)
        .filter((t) => {
          return !NON_PROPERTY_TARGETS.includes(t.value);
        }).length > 0
    );
  }

  get isFlowOnly() {
    const enabledTargets = Object.values(this.targets).filter((t) => t.enabled);
    return (
      enabledTargets.length === 1 &&
      enabledTargets[0].value === TARGETS.FlowScreen.value
    );
  }

  get isRecordPageSelected() {
    return this.targets.lightning__RecordPage.enabled === true;
  }
}
