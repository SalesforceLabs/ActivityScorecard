/**
 * Created by jonathan.linn on 6/19/20.
 */


global with sharing class ReportsPicklistKPI2 extends VisualEditor.DynamicPickList {

    global override VisualEditor.DataRow getDefaultValue() {
        Report r = [SELECT Id, Name FROM report WHERE Name = 'Leads Created (Last 7 Days)' LIMIT 1][0];
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow(r.Name, (String)r.Id, true);
        return defaultValue;
    }


    global override VisualEditor.DynamicPickListRows getValues() {

        ReportList rl = new ReportList();
        return rl.getValues();
    }

    global override Boolean isValid(Object attr) {
        return true;
    }
}