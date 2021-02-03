import { LightningElement, api } from 'lwc';

export default class SobjectDefinition extends LightningElement {
    @api
    oid = '';

    name = '';

    onChangeInput = (e) => {
        this.name = e.target.value;
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    id: this.oid,
                    name: this.name
                }
            })
        );
    };

    deleteRow = () => {
        this.dispatchEvent(
            new CustomEvent('delete', {
                detail: this.oid
            })
        );
    };
}
