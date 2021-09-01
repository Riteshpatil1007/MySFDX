({
	fetchContacts : function(component, event, helper) {
		var action = component.get("c.getContacts");
        	var accountId = component.get("v.recordId");
        	action.setParams({
            		accountIds: accountId
        	});

        	action.setCallback(this, function(response){
          	var state = response.getState();
        	if(state === 'SUCCESS'){
            	var contactList = response.getReturnValue();
                console.log(contactList);
                component.set("v.contactList",contactList);
        	}
       		else {
            	alert('Error in getting data');
       		}
       });
        $A.enqueueAction(action);
	},
    
    saveContacts : function(component, event, helper){
        var contactList = component.get('v.contactList');
        var recordViewForm = component.find('recordViewForm');
        var recordEditForm = component.find('recordEditForm');
        var saveAction = component.get('c.saveContactList');
        var ToastEvent = $A.get('e.force:showToast');
        saveAction.setParams({
            contactList : contactList
        });
        saveAction.setCallback(this, function(response){
            var state = response.getState();
            var btn = event.getSource();
            if(state === 'SUCCESS'){
                var dataMap = response.getReturnValue();
                // one app container
                if(dataMap.status == 'success'){
                    $A.util.addClass(recordEditForm, 'formHide');
                    $A.util.removeClass(recordViewForm, 'formHide');
                    btn.set('v.name','edit');
                    btn.set('v.label','Edit');
                    toastEvent.setParams({
                        'title': 'Success!',
                        'type': 'success',
                        'mode': 'dismissible',
                        'message': dataMap.message
                    });
                    toastEvent.fire();
                }
                else if(dataMap.status =='error'){
                    toastEvent.setParams({
                        'title': 'Error!',
                        'type': 'error',
                        'mode': 'dismissible',
                        'message': dataMap.message
                    });
                    toastEvent.fire(); 
                }
            }
            else{
                alert('Error in getting data');
            }            
        });
        $A.enqueueAction(saveAction);
    }
})