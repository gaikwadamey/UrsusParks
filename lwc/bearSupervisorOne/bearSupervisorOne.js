import { api, LightningElement,wire } from 'lwc';
import { getRecord , getFieldValue } from 'lightning/uiRecordApi';

import SuperVisorField from '@salesforce/schema/Bear__c.Supervisor__c';
const bearsField =[SuperVisorField];

export default class BearSupervisorOne extends LightningElement 
{
    @api recordId;
    @wire (getRecord , {recordId: '$recordId', fields: bearsField})
    bear;

    get supervisorId()
    {
        return getFieldValue(this.bear.data ,SuperVisorField);
    }
}