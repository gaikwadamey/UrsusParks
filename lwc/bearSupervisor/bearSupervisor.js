import { LightningElement, api , wire} from 'lwc';
import { getRecord , getFieldValue } from 'lightning/uiRecordApi';
import SUPERVISOR_FIELD from '@salesforce/schema/Bear__c.Supervisor__c';
const bearsFields = [SUPERVISOR_FIELD];

export default class BearSupervisor extends LightningElement
 {
     @api recordId;
     @wire (getRecord,{ recordId: '$recordId' , fields: bearsFields})
     bear;

     get supervisorId ()
     {
     return getFieldValue(this.bear.data , SUPERVISOR_FIELD );
 }
}