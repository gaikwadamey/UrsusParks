public class searchBears {

    @AuraEnabled
    public static List<Bear__c> getAllBears(){
        List<Bear__c> BearList = [Select ID, Name ,Height__c,Sex__c,Weight__c,Supervisor__r.FirstName From Bear__c ];
        
        if(!BearList.isEmpty()){
            return BearList;
        }
        return Null;
    }
}