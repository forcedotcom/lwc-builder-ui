/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export const buildHtml = (contents) => {
  const { targets, componentName } = contents;
  if (
    targets?.lightning__RecordAction?.enabled &&
    !targets?.lightning__RecordAction?.headlessAction
  ) {
    return `<template>
  <lightning-quick-action-panel header="${componentName}">
    <div>Modal Content</div>
    <div slot="footer">
      <lightning-button variant="neutral" label="Close" onclick={closeModal}></lightning-button>
      <lightning-button variant="brand" label="Action" class="slds-m-left_x-small"></lightning-button>
    </div>
  </lightning-quick-action-panel>
</template>`;
  }

  if (
    targets?.lightning__RecordAction?.enabled &&
    targets?.lightning__RecordAction?.headlessAction
  ) {
    return `<template></template>`;
  }

  return `<template>
    <h1>${componentName}</h1>
</template>`;
};
