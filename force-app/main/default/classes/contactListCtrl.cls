public class contactListCtrl {
	@AuraEnabled(cacheable=true)
    public static List<contact>getContactList(){
        List<Contact> conList = [select id, firstName, lastname, email from contact where email != null ORDER BY lastName ASC];
        return conList;
    }
}