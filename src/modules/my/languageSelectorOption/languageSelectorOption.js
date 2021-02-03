import { LightningElement, api } from 'lwc';

export default class LanguageSelectorOption extends LightningElement {

  @api
  language;

  @api
  selected;

  get isSelected() {
    return this.selected === this.language;
  }

  get optionClass() {
    return `slds-media slds-listbox__option slds-listbox__option_plain slds-media_small ${this.isSelected ? 'slds-is-selected' : ''}`;
  }

  onClickOption = () => {
    this.dispatchEvent(new CustomEvent('select', {
      detail: this.language
    }));
  }

}
