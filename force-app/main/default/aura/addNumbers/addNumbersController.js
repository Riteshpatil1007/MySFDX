({
	addition : function(component, event, helper) {
        alert('hi');
		var firstnumber = parseInt(component.find("fnum").get("v.value"));
        var secondnumber = parseInt(component.find("snum").get("v.value"));
        component.find("resultid").set("v.value", (firstnumber + secondnumber));
	}
})