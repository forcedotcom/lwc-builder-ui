import { LightningElement } from 'lwc';

export default class LanguageSelector extends LightningElement {

  isFocused = false;
  languages = ["English", "日本語"];
  selected = this.languages[0];
  
  onFocus = () => {
    this.isFocused = true;
  }

  onBlur = () => {
    this.isFocused = false;
  }

  get comboboxClass() {
    return `slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click ${this.isFocused ? 'slds-is-open' : ''}`;
  }
  onSelectOption = e => {
    console.log(e);
    this.selected = e.detail;
    this.isFocused = false;
  }

} 
