/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export const buildMeta = (contents) => {
  const {
    apiVersion,
    isExposed,
    masterLabel,
    description,
    targets,
    properties,
    objects,
    configurationEditor
  } = contents;

  const enabledTargetArray = Object.values(targets).filter((t) => t.enabled);
  enabledTargetArray.forEach((t) => {
    t.properties = [];
    t.objects = [];
  });

  properties.forEach((p) => {
    p.selectedTargets.forEach((st) => {
      enabledTargetArray.find((t) => t.value === st).properties.push(p);
    });
  });
  if (objects.length > 0) {
    const recordPage = enabledTargetArray.find(
      (t) => t.value === 'lightning__RecordPage'
    );
    if (recordPage) {
      recordPage.objects = objects;
    }
  }

  let meta = ``;
  meta += `<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">\n`;
  meta += `\t<apiVersion>${apiVersion}</apiVersion>\n`;
  meta += `\t<isExposed>${isExposed}</isExposed>\n`;
  if (masterLabel) {
    meta += `\t<masterLabel>${masterLabel}</masterLabel>\n`;
  }
  if (description) {
    meta += `\t<description>${description}</description>\n`;
  }
  if (enabledTargetArray.length > 0) {
    meta += `\t<targets>\n`;
    meta += enabledTargetArray
      .map((t) => `\t\t<target>${t.value}</target>`)
      .join('\n');
    meta += `\n\t</targets>\n`;

    let targetConfigs = '';
    if (
      properties.length > 0 ||
      objects.length > 0 ||
      enabledTargetArray.find((t) => t.small || t.large) ||
      enabledTargetArray.find((t) => t.value === 'lightning__RecordAction') ||
      (enabledTargetArray.length === 1 &&
        enabledTargetArray[0].value === 'lightning__FlowScreen' &&
        configurationEditor)
    ) {
      for (let t of enabledTargetArray) {
        // No targetConfig, property support
        if (
          t.value === 'lightningCommunity__Page' ||
          t.value === 'lightningCommunity__Page_Layout' ||
          t.value === 'lightningCommunity__Theme_Layout'
        ) {
          continue;
        }
        if (
          t.properties.length === 0 &&
          t.objects.length === 0 &&
          !(
            (t.value === 'lightning__AppPage' ||
              t.value === 'lightning__HomePage' ||
              t.value === 'lightning__RecordPage') &&
            (t.small || t.large)
          ) &&
          t.value !== 'lightning__RecordAction' &&
          !(
            enabledTargetArray.length === 1 &&
            enabledTargetArray[0].value === 'lightning__FlowScreen' &&
            configurationEditor
          )
        ) {
          continue;
        }

        // custom property editor for Flow
        if (
          enabledTargetArray.length === 1 &&
          t.value === 'lightning__FlowScreen' &&
          configurationEditor
        ) {
          targetConfigs += `\t\t<targetConfig targets="${t.value}" configurationEditor="${configurationEditor}">\n`;
        } else {
          targetConfigs += `\t\t<targetConfig targets="${t.value}">\n`;
        }

        targetConfigs += t.properties
          .map((p) => {
            let propAttributes = ` name="${p.name}"`;

            if (p.type === 'apex') {
              propAttributes += ` type="${p.apexClassName}"`;
            } else if (p.type === 'sobject') {
              propAttributes += ` type="${p.sObjectName}"`;
            } else {
              propAttributes += ` type="${p.type}"`;
            }

            if (
              p.type === 'String' &&
              p.datasource &&
              t.value !== 'lightning__FlowScreen'
            ) {
              propAttributes += ` datasource="${p.datasource}"`;
            }
            if (
              p.default &&
              !(
                t.value === 'lightning__FlowScreen' &&
                p.flowInput ^ p.flowOutput &&
                p.flowOutput
              ) // No support for Flow outputOnly
            ) {
              propAttributes += ` default="${p.default}"`;
            }
            if (p.description) {
              propAttributes += ` description="${p.description}"`;
            }
            if (
              p.type === 'Integer' &&
              (p.min || p.min === 0) &&
              t.value !== 'lightning__FlowScreen'
            ) {
              propAttributes += ` min="${p.min}"`;
            }
            if (
              p.type === 'Integer' &&
              (p.max || p.max === 0) &&
              t.value !== 'lightning__FlowScreen'
            ) {
              propAttributes += ` max="${p.max}"`;
            }
            if (p.label) {
              propAttributes += ` label="${p.label}"`;
            }
            if (
              p.type === 'String' &&
              p.placeholder &&
              t.value !== 'lightning__FlowScreen'
            ) {
              propAttributes += ` placeholder="${p.placeholder}"`;
            }
            if (
              p.required &&
              !(
                t.value === 'lightning__FlowScreen' &&
                p.flowInput ^ p.flowOutput &&
                p.flowOutput
              ) // No support for Flow outputOnly
            ) {
              propAttributes += ` required="true"`;
            }
            if (
              t.value === 'lightning__FlowScreen' &&
              p.flowInput ^ p.flowOutput
            ) {
              propAttributes += ` role="${
                p.flowInput ? 'inputOnly' : 'outputOnly'
              }"`;
            }

            if (
              p.type === 'ContentReference' &&
              t.value === 'lightningCommunity__Default' &&
              p.cmsFilters.length > 0 &&
              p.cmsFilters.find((f) => !!f.value)
            ) {
              propAttributes += ` filter="${p.cmsFilters
                .filter((f) => !!f.value)
                .map((f) => f.value)
                .join(',')}"`;
            }

            return `\t\t\t<property${propAttributes} />`;
          })
          .join('\n');
        if (t.properties.length > 0) {
          targetConfigs += '\n';
        }

        // Specific sObject targeting
        if (t.value === 'lightning__RecordPage' && t.objects.length > 0) {
          targetConfigs += `\t\t\t<objects>\n`;
          targetConfigs += t.objects
            .map((o) => {
              return `\t\t\t\t<object>${o.name}</object>`;
            })
            .join('\n');
          targetConfigs += `\n\t\t\t</objects>\n`;
        }

        // Action Type
        if (t.value === 'lightning__RecordAction') {
          targetConfigs += `\t\t\t<actionType>${
            t.headlessAction ? 'Action' : 'ScreenAction'
          }</actionType>\n`;
        }

        // Form Factor
        if (
          (t.value === 'lightning__AppPage' ||
            t.value === 'lightning__HomePage' ||
            t.value === 'lightning__RecordPage') &&
          (t.small || t.large)
        ) {
          targetConfigs += `\t\t\t<supportedFormFactors>\n`;
          if (t.small) {
            targetConfigs += `\t\t\t\t<supportedFormFactor type="Small"/>\n`;
          }
          if (t.large) {
            targetConfigs += `\t\t\t\t<supportedFormFactor type="Large"/>\n`;
          }
          targetConfigs += `\t\t\t</supportedFormFactors>\n`;
        }
        targetConfigs += `\t\t</targetConfig>\n`;
      }
    }
    if (targetConfigs) {
      meta += `\t<targetConfigs>\n${targetConfigs}\t</targetConfigs>\n`;
    }
  }
  meta += `</LightningComponentBundle>`;
  return meta;
};
