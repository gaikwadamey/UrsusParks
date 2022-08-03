import { LightningElement , wire} from 'lwc';
import UrsusResouces from '@salesforce/resourceUrl/ursus_park';
import searchBears from '@salesforce/apex/BearController.searchBears';

export default class BearListone extends LightningElement 
{
    searchTerm = '';
    @wire(searchBears, {searchTerm: '$searchTerm'})
    bears;

    appResource = { bearSilhouette: `{$UrsusResources}/img/standing-bear-Silhouette.png`,};


    handleChangeTermevent(event)
    {
        window.clearTimeout(this.delayTimeout);
        const searchTerm = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchTerm = searchTerm;
        }, 300);
    }
    get hasResult()
    {
        return(this.bears.data.lenght > 0);
    }
}