import { LightningElement } from 'lwc';

export default class AccountSearch extends LightningElement 
{
    numberofEmployees = null;
    handleChange (event)
    {
        this.numberofEmployees = event.details.value;
    }
    reset()
    {
        this.numberofEmployees = null;
    }
}