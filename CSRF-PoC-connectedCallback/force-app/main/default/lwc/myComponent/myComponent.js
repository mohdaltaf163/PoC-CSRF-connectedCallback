import { LightningElement } from 'lwc';
import performDmlOperation from '@salesforce/apex/MyController.performDmlOperation';

export default class MyComponent extends LightningElement {
    connectedCallback() {
        this.performDml();
    }

    performDml() {
        performDmlOperation()
            .then(() => {
                console.log('DML operation performed successfully');
            })
            .catch(error => {
                console.error('Error performing DML operation', error);
            });
    }
}
