import { LightningElement, api } from 'lwc';

export default class Preview extends LightningElement {
    @api
    contents;

    selected = "meta";

    showHtml() {
      this.selected = "html";
    }
    showJs() {
      this.selected = "js";
    }
    showCss() {
      this.selected = "css";
    }
    showMeta() {
      this.selected = "meta";
    }
    showSvg() {
      this.selected = "svg";
    }
    showTest() {
      this.selected = "test";
    }

    get htmlContentClass() {
      return this.contentClass("html");
    }
    get jsContentClass() {
      return this.contentClass("js");
    }
    get cssContentClass() {
      return this.contentClass("css");
    }
    get metaContentClass() {
      return this.contentClass("meta");
    }
    get svgContentClass() {
      return this.contentClass("svg");
    }
    get testContentClass() {
      return this.contentClass("test");
    }

    contentClass(contentType) {
      return this.selected === contentType ? "preview-content selected" : ""; 
    }
}
