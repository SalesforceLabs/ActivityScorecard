/**
 * Created by jonathan.linn on 4/21/20.
 */

@IsTest
private class ReportsValuesTest {
    @IsTest (SeeAllData=true)
    static void testBehavior() {
        Report r = [SELECT Id, Name FROM Report LIMIT 1][0];
        ReportsValues.getBasicReport(r.Id);
    }
}