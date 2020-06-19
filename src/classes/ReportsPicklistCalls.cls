/**
 * Created by jonathan.linn on 6/19/20.
 */

global with sharing class ReportsPicklistCalls extends VisualEditor.DynamicPickList {

    global override VisualEditor.DataRow getDefaultValue() {
        Report r = [SELECT Id, Name FROM report WHERE Name Like 'My Completed Calls (Last 7 Days)' LIMIT 1][0];
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow(r.Name, (String)r.Id, true);
        return defaultValue;
    }

    global override VisualEditor.DynamicPickListRows getValues() {

        Map<Id, Report> reportMap = new Map<Id, Report>([SELECT Id, Name FROM Report]);
        List<Report> reportList = new List<Report>([SELECT Id, Name FROM Report]);
        VisualEditor.DynamicPickListRows myValues = new VisualEditor.DynamicPickListRows();

        for(Report r : reportList) {
            myValues.addRow(new VisualEditor.DataRow(r.Name, (String)r.Id));
        }

        return myValues;
    }
}