({
	addHelper : function() {
		console.log("you pressed me buddy!");
        var first = component.get("v.number1");
        var second = component.get("v.number2");
        console.log(first);
        
        var addition = parseInt(second) + parseInt(first);
        console.log(addition);
        
        component.set("v.addition",addition);
	}
})