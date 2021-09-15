/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, track } from 'lwc';
import { buildContents } from 'my/buildContents';
import { sentenceCase, camelCase } from 'change-case';

export default class Form extends LightningElement {
  componentName = '';

  @track
  inputs = {
    componentName: '',
    apiVersion: '52.0', // TODO: fetch from SFDC API
    withHtml: true,
    withCss: true,
    withSvg: false,
    withTest: false,
    isExposed: true,
    masterLabel: '',
    description: '',
    configurationEditor: '',
    svgFileName: '',
    svgFileContent: '',
    targets: {},
    propertyIds: [],
    properties: [],
    objectIds: [],
    objects: []
  };

  targetsArr = [
    { name: 'AppPage', value: 'lightning__AppPage' },
    { name: 'HomePage', value: 'lightning__HomePage' },
    { name: 'RecordPage', value: 'lightning__RecordPage' },
    { name: 'RecordAction', value: 'lightning__RecordAction' },
    { name: 'UtilityBar', value: 'lightning__UtilityBar' },
    { name: 'FlowScreen', value: 'lightning__FlowScreen' },
    { name: 'Tab', value: 'lightning__Tab' },
    { name: 'Inbox', value: 'lightning__Inbox' },
    { name: 'CommunityPage', value: 'lightningCommunity__Page' },
    { name: 'CommunityDefault', value: 'lightningCommunity__Default' },
    { name: 'CommunityPageLayout', value: 'lightningCommunity__Page_Layout' },
    { name: 'CommunityThemeLayout', value: 'lightningCommunity__Theme_Layout' },
    { name: 'SnapinChatMessage', value: 'lightningSnapin__ChatMessage' },
    { name: 'SnapinMinimized', value: 'lightningSnapin__Minimized' },
    { name: 'SnapinPreChat', value: 'lightningSnapin__PreChat' },
    { name: 'SnapinChatHeader', value: 'lightningSnapin__ChatHeader' }
  ];
  pDefCount = 0;
  oDefCount = 0;

  connectedCallback() {
    this.targetsArr.forEach((t) => {
      this.inputs.targets[t.value] = {
        name: t.name,
        value: t.value,
        enabled: false,
        small: false,
        large: false,
        headlessAction: false,
        properties: [],
        objects: []
      };
    });

    this.addObjectRow();
    this.addPropertyRow();
  }

  onChangeInput(e) {
    const formattedValue = this.formatInputValue(
      e.currentTarget.name,
      e.currentTarget.value
    );
    this.inputs[e.currentTarget.name] = formattedValue;
    if (e.currentTarget.name === 'componentName' && !this.inputs.masterLabel) {
      this.inputs.masterLabel = sentenceCase(formattedValue);
    }
    this.updateContent();
  }

  onChangeSelect(e) {
    this.inputs[e.currentTarget.name] = e.currentTarget.value;
    this.updateContent();
  }

  onChangeCheckbox(e) {
    this.inputs[e.currentTarget.name] = e.currentTarget.checked;
    this.updateContent();
  }

  onChangeTargetValue(e) {
    if (!e.detail) {
      return;
    }
    const { target, enabled, small, large, headlessAction } = e.detail;

    this.inputs.targets[target.value].enabled = enabled;
    if (enabled) {
      this.inputs.targets[target.value].small = small;
      this.inputs.targets[target.value].large = large;
      this.inputs.targets[target.value].headlessAction = headlessAction;
    }
    this.updateContent();
  }

  formatInputValue = (key, value) => {
    if (key === 'componentName') {
      return camelCase(value.replace(/^\d+/, ''));
    }
    return value;
  };

  get isRecordPageSelected() {
    return this.inputs.targets.lightning__RecordPage.enabled === true;
  }

  addPropertyRow = () => {
    const pId = `propertyId_${this.pDefCount}`;
    this.inputs.propertyIds.push(pId);
    this.pDefCount++;
  };

  deletePropertyRow = (e) => {
    const targetId = e.detail;
    this.inputs.propertyIds = this.inputs.propertyIds.filter(
      (pId) => pId !== targetId
    );
    this.inputs.properties = this.inputs.properties.filter(
      (p) => p.id !== targetId
    );
  };

  addObjectRow = () => {
    const oId = `objectId_${this.oDefCount}`;
    this.inputs.objectIds.push(oId);
    // this.inputs.objects.push({ id: oId });
    this.oDefCount++;
  };

  deleteObjectRow = (e) => {
    const targetId = e.detail;
    this.inputs.objectIds = this.inputs.objectIds.filter(
      (oId) => oId !== targetId
    );
    this.inputs.objects = this.inputs.objects.filter((o) => o.id !== targetId);
    // update content when the object is deleted from config
    this.updateContent();
  };

  onChangePropertyRow = (e) => {
    const pIndex = this.inputs.properties.findIndex(
      (p) => p.id === e.detail.id
    );
    if (pIndex === -1) {
      this.inputs.properties.push(e.detail);
    } else {
      this.inputs.properties[pIndex] = e.detail;
    }
    this.updateContent();
  };

  onChangeObjectRow = (e) => {
    const oIndex = this.inputs.objects.findIndex((o) => o.id === e.detail.id);
    if (oIndex === -1) {
      this.inputs.objects.push(e.detail);
    } else {
      this.inputs.objects[oIndex] = e.detail;
    }
    this.updateContent();
  };

  updateContent() {
    const formatted = buildContents(this.inputs);
    const e = new CustomEvent('updatecontent', {
      detail: formatted
    });
    this.dispatchEvent(e);
  }

  handleSvgUpload = (e) => {
    const { fileName, fileContent } = e.detail;
    this.inputs.svgFileName = fileName;
    this.inputs.svgFileContent = fileContent;
    this.updateContent();
  };

  nonPropertyTargets = [
    'lightning__Tab',
    'lightningSnapin__ChatMessage',
    'lightningCommunity__Page',
    'lightningSnapin__Minimized',
    'lightningSnapin__PreChat',
    'lightningSnapin__ChatHeader'
  ];

  get hasPropertyTarget() {
    return (
      Object.values(this.inputs.targets)
        .filter((t) => t.enabled)
        .filter((t) => {
          return !this.nonPropertyTargets.includes(t.value);
        }).length > 0
    );
  }

  get isFlowOnly() {
    const enabledTargets = Object.values(this.inputs.targets).filter(
      (t) => t.enabled
    );
    return (
      enabledTargets.length === 1 &&
      enabledTargets[0].value === 'lightning__FlowScreen'
    );
  }
}
