public class MyContactsController {
	@AuraEnabled
    public static List<Contact> getContacts(List<id> accountIds) {
        List<Contact> contactList = [Select Id, Name, AccountId, Phone, EMail 
                                     FROM Contact
                                     WHERE AccountId in : accountIds];
        return contactList;
    }
    
    @AuraEnabled
    public static Map<String,String> saveContactList(List<Contact> contactList) {
        
        Map<String,String> resultMap = new Map<String,String>();
        try{
        	update contactList;
            resultMap.put('status', 'success');
            resultMap.put('message', 'Contacts Updated Successfully');
        }
        catch(Exception e){
            resultMap.put('status', 'error');
            resultMap.put('message', e.getMessage());
        }
        return resultMap;
        
    }
}