/**
 * Created by jonathan.linn on 4/21/20.
 */

@IsTest
private class ReportsPicklistTest {
    @IsTest(SeeAllData=true)
    static void testDefaultValue() {
        ReportsPicklist rp = new ReportsPicklist();
        //VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('Placeholder','1');

       rp.getDefaultValue();
    }

    @IsTest(SeeAllData=true)
    static void testPicklists() {
        ReportsPicklist rp = new ReportsPicklist();
        rp.getValues();

        System.assertNotEquals(0, rp.getValues().size());
    }
}