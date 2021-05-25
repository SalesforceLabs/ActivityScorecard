/**
 * Created by jonathan.linn on 10/26/20.
 */

public with sharing class ReportCloneFactory {

    public static void cloneReports(Integer newReports) {
        Report r = new Report([SELECT Name FROM Report WHERE FolderName = 'Public Reports' LIMIT 1]);


        insert r;


    }
}