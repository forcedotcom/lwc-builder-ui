import { LightningElement, api } from 'lwc';

export default class PreviewContent extends LightningElement {
    @api
    filename;

    @api
    extension;

    @api
    prefix;

    @api
    type;

    @api
    selected;

    get className() {
        const tagClass = 'preview-header slds-vertical-tabs__nav-item';
        return this.selected === this.type
            ? `${tagClass} slds-is-active`
            : tagClass;
    }

    get tabIndex() {
        return this.selected === this.type ? '0' : '-1';
    }

    get isSelected() {
        return this.selected === this.type ? 'true' : 'false';
    }

    get fileName() {
        return `${this.prefix ? this.prefix : ''}${this.filename}.${
            this.extension
        }`;
    }

    onclickTab() {
        this.dispatchEvent(
            new CustomEvent('click', {
                detail: this.extension
            })
        );
    }
}
