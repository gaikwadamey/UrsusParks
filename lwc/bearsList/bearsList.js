import { LightningElement, wire } from 'lwc';

import ursusResources from '@salesforce/resourceUrl/ursus_park';

import searchBears from '@salesforce/apex/BearController.searchBears';

export default class bearList extends LightningElement 
{
    searchTerm = '';
    @wire (searchBears, {searchTerm:  '$searchTerm'} )
    bears;
    appresources = {
        bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
    };
     
    handleSearchTermChange(event)
    {
        window.clearTimeout(this.delayTimeout);
        const searchTerm = event.target.value;
        this.delayTimeout = setTimeout (() => {
            this.searchTerm = searchTerm; }, 300 );
        
    }

}