({
	constructObjectList : function(component, event, helper, returnValue) {
        var returnString = JSON.stringify(returnValue);
        var objectList;
        
        //Grab fields, look to optimize with controller later
        var field1 = component.get("v.field1");
        var field2 = component.get("v.field2");
        var field3 = component.get("v.field3");
        var field4 = component.get("v.field4");
        var fieldList = [field1, field2, field3, field4];
        var records = []
        
        //get the value for the record and field combinations and save in generic object
        for (var i=0; i< returnValue.length; i++){
            var tempfield1 = "";
        	var tempfield2 = "";
        	var tempfield3 = "";
        	var tempfield4 = "";
            
            for (var j=0; j< fieldList.length; j++){
        		var Record = returnValue[i];
                var FieldName = fieldList[j];
            	var fieldValue;
        	
                if (FieldName.indexOf(".") >= 0) {
                    var ParentSobject = Record[FieldName.split(".")[0]];
                    if(ParentSobject != undefined){
                        fieldValue = ParentSobject[FieldName.split(".")[1]]
                    }
                }
                else{
                    fieldValue = Record[FieldName]
                }
                if(j == 0){
                    tempfield1 = fieldValue;
                }else if(j == 1){
                    tempfield2 = fieldValue;
                }else if(j ==2){
                        tempfield3 = fieldValue;
                }else if(j == 3){
                     tempfield4 = fieldValue;
                    records[i] = {
        				field1: tempfield1,
                        field2: tempfield2,
                        field3: tempfield3,
                        field4: tempfield4
                	}
				}
        	}
        }
        component.set("v.relatedRecords", records);
        
        
         //Hide "view all" button if there are less than 6 records 
         if(records.length<6){
         	component.set('v.showButton',false) 
         } 
	},
    getFieldLabels : function(component, event, helper){
        var field1 = component.get("v.field1");
        var field2 = component.get("v.field2");
        var field3 = component.get("v.field3");
        var field4 = component.get("v.field4");
        console.log("Helper Called");
        
        var action = component.get("c.getFieldLabels");
        action.setParams({
        	field1 :field1,
            field2 :field2,
            field3 :field3,
            field4 :field4,
    	});
        
        var self = this;
        /*action.setCallback(this, function(actionResult) {
            var state = actionResult.getState();
            if (component.isValid() && state === "SUCCESS") {
                returnValue = actionResult.getReturnValue();
                //If callback is sucessful create the generic object and set it in the component
                helper.constructObjectList(component, event, helper, returnValue);
            }
                      
        });*/
        $A.enqueueAction(action);
	}
})
