import { LightningElement, api, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdateRecordComponent extends LightningElement {
    @api recordId;
    newName;

    connectedCallback() {
        // Example of using connectedCallback to perform an update operation
        this.newName = 'New Account Name';
        this.updateRecord();
    }

    updateRecord() {
        const fields = {};
        fields.Id = this.recordId;
        fields.Name = this.newName;

        const recordInput = { fields };

        updateRecord(recordInput)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record updated successfully',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error updating record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}
