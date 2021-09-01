({
	addition : function(component, event, helper) {
		var firstnumber = parseInt(component.get("v.fnum"));
        var secondnumber = parseInt(component.get("v.snum"));
        
        var action = component.get("c.getAdditionResult");
        action.setParams({"fstNumber" : firstnumber,
                          "secNumber" : secondnumber});
        action.setCallback(this,function(response){
            var addResult = response.getReturnValue();
            alert(addResult);
            
      	component.set("v.res", addResult );
        });
        $A.enqueueAction(action);
	}
})