/**
 * Created by jonathan.linn on 5/25/21.
 */

public with sharing class ReportList {

        private List<Report> reportList = new List<Report>();
        public VisualEditor.DynamicPickListRows myValues = new VisualEditor.DynamicPickListRows();



        public VisualEditor.DynamicPickListRows getValues() {

            if (this.myValues.size() == 0) {
                this.reportList = [SELECT Id, Name FROM Report];

                for(Report r : this.reportList) {
                    myValues.addRow(new VisualEditor.DataRow(r.Name, (String)r.Id));
                }
            }

            return this.myValues;
        }

}