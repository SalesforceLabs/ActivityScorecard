/**
 * Created by jonathan.linn on 4/20/20.
 */

global with sharing class ReportsPicklist extends VisualEditor.DynamicPickList {

    global override VisualEditor.DataRow getDefaultValue() {
        Report r = [SELECT Id, Name FROM report LIMIT 1][0];
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

        //myValues.addRow(new VisualEditor.DataRow(reportList[0].Name, (String)reportList[0].Id, true));



        return myValues;

    }
}