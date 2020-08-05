/**
 * Created by jonathan.linn on 4/21/20.
 */

@IsTest
private class ReportsPicklistTest {
    @IsTest(SeeAllData=true)
    static void testDefaultValue() {
        ReportsPicklist rp = new ReportsPicklist();
        System.assertNotEquals(null, rp.getDefaultValue().toString());
    }

    @IsTest(SeeAllData=true)
    static void testPicklists() {
        ReportsPicklist rp = new ReportsPicklist();
        rp.getValues();

        System.assertNotEquals(0, rp.getValues().size());
    }

    @IsTest(SeeAllData=true)
    static void testDefaultValueCalls() {
        ReportsPicklistCalls rp = new ReportsPicklistCalls() ;
        System.assertNotEquals(null, rp.getDefaultValue().toString());
    }

    @IsTest(SeeAllData=true)
    static void testPicklistsCalls() {
        ReportsPicklistCalls rp = new ReportsPicklistCalls();
        rp.getValues();

        System.assertNotEquals(0, rp.getValues().size());
    }

    @IsTest(SeeAllData=true)
    static void testDefaultValueEmails() {
        ReportsPicklistEmails rp = new ReportsPicklistEmails() ;
        System.assertNotEquals(null, rp.getDefaultValue().toString());
    }

    @IsTest(SeeAllData=true)
    static void testPicklistsEmails() {
        ReportsPicklistEmails rp = new ReportsPicklistEmails();
        rp.getValues();

        System.assertNotEquals(0, rp.getValues().size());
    }

    @IsTest(SeeAllData=true)
    static void testDefaultValueEvents() {
        ReportsPicklistEvents rp = new ReportsPicklistEvents() ;
        System.assertNotEquals(null, rp.getDefaultValue().toString());
    }

    @IsTest(SeeAllData=true)
    static void testPicklistsEvents() {
        ReportsPicklistEvents rp = new ReportsPicklistEvents();
        rp.getValues();

        System.assertNotEquals(0, rp.getValues().size());
    }

    @IsTest(SeeAllData=true)
    static void testDefaultValueKPI1() {
        ReportsPicklistKPI1 rp = new ReportsPicklistKPI1() ;
        System.assertNotEquals(null, rp.getDefaultValue().toString());
    }

    @IsTest(SeeAllData=true)
    static void testPicklistsKPI1() {
        ReportsPicklistKPI1 rp = new ReportsPicklistKPI1();
        rp.getValues();

        System.assertNotEquals(0, rp.getValues().size());
    }

    @IsTest(SeeAllData=true)
    static void testDefaultValueKPI2() {
        ReportsPicklistKPI2 rp = new ReportsPicklistKPI2() ;
        System.assertNotEquals(null, rp.getDefaultValue().toString());
    }

    @IsTest(SeeAllData=true)
    static void testPicklistsKPI2() {
        ReportsPicklistKPI2 rp = new ReportsPicklistKPI2();
        rp.getValues();

        System.assertNotEquals(0, rp.getValues().size());
    }
    @IsTest(SeeAllData=true)
    static void testDefaultValueTasks() {
        ReportsPicklistTasks rp = new ReportsPicklistTasks() ;
        System.assertNotEquals(null, rp.getDefaultValue().toString());
    }

    @IsTest(SeeAllData=true)
    static void testPicklistsTasks() {
        ReportsPicklistTasks rp = new ReportsPicklistTasks();
        rp.getValues();

        System.assertNotEquals(0, rp.getValues().size());
    }
}