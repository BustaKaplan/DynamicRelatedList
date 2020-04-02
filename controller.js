({
    doInit : function(component, event, helper) {
        var action = component.get("c.getRecords");
        var button = component.find("viewAll");
        var recordId = component.get("v.recordId");
        var returnValue;
        
        //Grap parameters for Dynamic Query
        var objectName = component.get("v.objectName");
        var filter = component.get("v.filter");
        var field1 = component.get("v.field1");
        var field2 = component.get("v.field2");
        var field3 = component.get("v.field3");
        var field4 = component.get("v.field4");
        var filter = component.get("v.filter");
        
        //Construct query
        var queryString = "SELECT " + field1 + ", " + field2 + ", " +  field3  + ", " + field4 + " FROM " + objectName + " WHERE " + filter;

        action.setParams({
        	recordId : recordId,
            queryString : queryString
    	});
        
        //Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
            var state = actionResult.getState();
            if (component.isValid() && state === "SUCCESS") {
                returnValue = actionResult.getReturnValue();
                //If callback is sucessful create the generic object and set it in the component
                helper.constructObjectList(component, event, helper, returnValue);
            }
                      
        });
        $A.enqueueAction(action);
        helper.getFieldLabels(component, event, helper);
    },
    
    viewAll : function(component, event, helper){
        //toggle between compact dispay and expanded display
        if(component.get("v.numRecords") == 5){
            component.set("v.numRecords", "20")   
        }else{
            component.set("v.numRecords", "5")
        }
    }
})
