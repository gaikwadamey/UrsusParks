import { LightningElement,wire,api } from 'lwc';
import { getRecord , getFieldValue } from 'lightning/uiRecordApi';

const NAME_Field = 'Bear__c.Name';
const LOCATION_LATITUDE_FIELD = 'Bear__c.Location__Latitude__s';
const LOCATION_LONGITUDE_FIELD = 'Bear__c.Location__Longitude__s';

const bearsFields =[
    NAME_Field,
    LOCATION_LATITUDE_FIELD,
    LOCATION_LONGITUDE_FIELD
];

export default class BearLocationOne extends LightningElement 
{
    @api recordId;
    name;
    mapMarkers =[];
    @wire ( getRecord, {recordId: '$recordId' , fields: bearsFields} )
    loadBearMap ({error , data})
    {
        if(error)
        {

        }
        else if (data)
        {
            this.name = getFieldValue(data, NAME_Field);
            const Latitude = getFieldValue(data,LOCATION_LATITUDE_FIELD);
            const Longitude= getFieldValue(data,LOCATION_LONGITUDE_FIELD);

            this.mapMarkers = [{
                location: {Latitude , Longitude},
                title: this.name,
                description: 'CoordS67: ${Latitude},${Longitude}'
            }];
        }
    }
    get cardTitle()
    {
        return (this.name) ? `${this.name}'S location` :' Bear Location1 ' ;
    }
   
}