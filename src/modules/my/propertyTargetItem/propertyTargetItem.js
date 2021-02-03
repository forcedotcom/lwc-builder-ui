import { LightningElement, api } from 'lwc';

export default class PropertyTargetItem extends LightningElement {
    @api
    target;

    isChecked = false;

    onChangeTargetCheckbox = e => {
      this.isChecked = e.currentTarget.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          target: this.target,
          isChecked: this.isChecked
        }
      }))
    }

    get targetId() {
      return `propTarget${this.target.value}`;
    }

}
