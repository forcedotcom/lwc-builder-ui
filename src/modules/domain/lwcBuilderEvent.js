/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

class Payload {
  componentName;
  css;
  html;
  js;
  meta;
  svg;
  test;

  constructor(component) {
    this.componentName = component.componentName;
    this.js = component.js;
    this.meta = component.meta;
    if (component.withCss) this.css = component.css;
    if (component.withHtml) this.html = component.html;
    if (component.withSvg) this.svg = component.svg;
    if (component.withTest) this.test = component.test;
  }
}

export default class LWCBuilderEvent {
  type; // Options: create_button_clicked
  payload; // Payload object

  constructor(type, payload) {
    this.type = type;
    this.payload = new Payload(payload);
  }
}
