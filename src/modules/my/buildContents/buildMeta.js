/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const buildMeta = (contents) => {
  const {
    apiVersion,
    isExposed,
    primaryLabel,
    description,
    targets,
    properties,
    objects
  } = contents;

  console.log(properties);

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
  if (primaryLabel) {
    meta += `\t<primaryLabel>${primaryLabel}</primaryLabel>\n`;
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
    if (
      properties.length > 0 ||
      objects.length > 0 ||
      enabledTargetArray.find((t) => t.small || t.large)
    ) {
      meta += `\t<targetConfigs>\n`;
      for (let t of enabledTargetArray) {
        if (t.value === 'lightningCommunity__Page') {
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
          )
        ) {
          continue;
        }
        meta += `\t\t<targetConfig targets="${t.value}">\n`;
        meta += t.properties
          .map((p) => {
            let propAttributes = ` name="${p.name}" `;

            if (p.type === 'apex') {
              propAttributes += ` type="${p.apexClassName}"`;
            } else if (p.type === 'sobject') {
              propAttributes += ` type="${p.sObjectName}"`;
            } else {
              propAttributes += ` type="${p.type}"`;
            }

            if (p.datasource && t.value !== 'lightning__FlowScreen') {
              propAttributes += ` datasource="${p.datasource}"`;
            }
            if (p.default) {
              propAttributes += ` default="${p.default}"`;
            }
            if (p.description) {
              propAttributes += ` description="${p.description}"`;
            }
            if (p.min && t.value !== 'lightning__FlowScreen') {
              propAttributes += ` min="${p.min}"`;
            }
            if (p.max && t.value !== 'lightning__FlowScreen') {
              propAttributes += ` max="${p.max}"`;
            }
            if (p.label) {
              propAttributes += ` label="${p.label}"`;
            }
            if (p.placeholder && t.value !== 'lightning__FlowScreen') {
              propAttributes += ` placeholder="${p.placeholder}"`;
            }
            if (p.required) {
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

            return `\t\t\t<property ${propAttributes} />`;
          })
          .join('\n');
        if (t.properties.length > 0) {
          meta += '\n';
        }

        if (t.value === 'lightning__RecordPage' && t.objects.length > 0) {
          meta += `\t\t\t<objects>\n`;
          meta += t.objects
            .map((o) => {
              return `\t\t\t\t<object>${o.name}</object>`;
            })
            .join('\n');
          meta += `\n\t\t\t</objects>\n`;
        }

        if (
          t.value === 'lightning__AppPage' ||
          t.value === 'lightning__HomePage' ||
          t.value === 'lightning__RecordPage'
        ) {
          meta += `\t\t\t<supportedFormFactors>\n`;
          if (t.small) {
            meta += `\t\t\t\t<supportedFormFactor type="Small"/>\n`;
          }
          if (t.large) {
            meta += `\t\t\t\t<supportedFormFactor type="Large"/>\n`;
          }
          meta += `\t\t\t</supportedFormFactors>\n`;
        }
        meta += `\t\t</targetConfig>\n`;
      }
      meta += `\t</targetConfigs>\n`;
    }
  }
  meta += `</LightningComponentBundle>`;
  return meta;
};

export default buildMeta;
