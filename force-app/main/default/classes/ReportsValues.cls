/**
 * Created by jonathan.linn on 4/20/20.
 */

global class ReportsValues {
    @AuraEnabled(Cacheable=true)
    public static Double getBasicReport(String reportId) {
        Reports.ReportResults results = Reports.ReportManager.runReport(reportId, true);

        System.debug(results.getFactMap().get('T!T').getAggregates().get(0).getValue());
        return (Double) (results.getFactMap().get('T!T').getAggregates().get(0).getValue());
    }
}