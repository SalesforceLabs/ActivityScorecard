/**
 * Created by jonathan.linn on 4/16/20.
 */

import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getBasicReport from '@salesforce/apex/ReportsValues.getBasicReport'

export default class ActivityScorecard extends NavigationMixin(LightningElement) {

    @api title;
    @api kpi_1_title;
    @api kpi1GoalValue;
    @api kpi1ReportId;
    @api kpi1value;
    @api kpi1GoalFlip = false;
    @wire(getBasicReport, {reportId: '$kpi1ReportId'}) kpi1Response;

    @api kpi2value;
    @api kpi_2_title;
    @api kpi2ReportId;
    @api kpi2GoalValue;
    @api kpi2GoalFlip = false;
    @wire(getBasicReport, {reportId: '$kpi2ReportId'}) kpi2Response;

    @api hideKpi = false;

    @api taskLabel = 'tasks completed';
    @api taskGoal = 0;
    @api tasksCompleted = 30;
    @api hideTasks = false;
    @api taskReportId;
    @wire(getBasicReport, {reportId: '$taskReportId'}) taskReportResponse;

    @api callLabel = 'calls logged';
    @api callGoal = 0;
    @api callsCompleted = 55;
    @api hideCalls = false;
    @api callReportId;
    @wire(getBasicReport, {reportId: '$callReportId'}) callReportResponse;

    @api emailLabel = 'emails sent';
    @api emailGoal = 0;
    @api emailsCompleted = 220;
    @api hideEmails = false;
    @api emailReportId;
    @wire(getBasicReport, {reportId: '$emailReportId'}) emailReportResponse;

    @api eventLabel = 'events logged';
    @api eventGoal = 0;
    @api eventsCompleted = -5;
    @api hideEvents = false;
    @api eventReportId;
    @wire(getBasicReport, {reportId: '$eventReportId'}) eventReportResponse;

    get KpiOneGoalVal() {
        return this.kpi1GoalValue;
    }
    get KpiTwoGoalVal() {
        return this.kpi2GoalValue;
    }

    get KpiOne() {
        return this.round(this.kpi1Response.data,2 ) ? this.round(this.kpi1Response.data,2 ) : 0;
    }

    get KpiTwo() {
        return this.round(this.kpi2Response.data,2 ) ? this.round(this.kpi2Response.data,2 ) : 0;
    }

    get taskKpi() {
        return this.round(this.taskReportResponse.data, 2) ? this.round(this.taskReportResponse.data, 2) : 0;
    }

    get callKpi() {
        return this.round(this.callReportResponse.data, 2) ? this.round(this.callReportResponse.data, 2) : 0;
    }

    get emailKpi() {
        return this.round(this.emailReportResponse.data, 2) ? this.round(this.emailReportResponse.data, 2) : 0;
    }

    get eventKpi() {
        return this.round(this.eventReportResponse.data, 2) ? this.round(this.eventReportResponse.data, 2) : 0;
    }

    get tasksCompletedPercent() {
        return Math.min(Math.max(this.taskKpi, 0.00001), this.taskGoal) / this.taskGoal * 100;
    }

    get callsCompletedPercent() {
        return Math.min(Math.max(this.callKpi, 0.00001), this.callGoal) / this.callGoal * 100;
    }

    get emailsCompletedPercent() {
        return Math.min(Math.max(this.emailKpi, 0.00001), this.emailGoal) / this.emailGoal * 100;
    }

    get eventsCompletedPercent() {
        return Math.min(Math.max(this.eventKpi, 0.00001), this.eventGoal) / this.eventGoal * 100;
    }

    get tasksCompletedStyleSyntax() {
        return 'width: ' + this.tasksCompletedPercent.toString() + '%' + ';background:' + '#4bca81' + ';'
    }

    get callsCompletedStyleSyntax() {
        return 'width: ' + this.callsCompletedPercent.toString() + '%' + ';background:' + '#48C3CC' + ';'
    }

    get emailsCompletedStyleSyntax() {
        return 'width: ' + String(this.emailsCompletedPercent) + '%' + ';background:' + '#95AEC5' + ';'
    }

    get eventsCompletedStyleSyntax() {
        return 'width: ' + this.eventsCompletedPercent.toString() + '%' + ';background:' + '#EB7092' + ';'
    }

    get kpi1IsPositive() {
        if (this.kpi1GoalFlip) {
            return this.KpiOne <= this.kpi1GoalValue;
        } else {
            return this.KpiOne >= this.kpi1GoalValue;
        }
    }

    get kpi2IsPositive() {
        if (this.kpi2GoalFlip) {
            return this.KpiTwo <= this.kpi2GoalValue;
        } else {
            return this.KpiTwo >= this.kpi2GoalValue;
        }
    }


    navigationBase(evt, reportId) {
        evt.preventDefault();
        evt.stopPropagation();

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: reportId,
                objectApiName: 'Report',
                actionName: 'view'
            }
        });
    }

    navigateToKpi1(evt) {
        this.navigationBase(evt, this.kpi1ReportId);
    }
    navigateToKpi2(evt) {
        this.navigationBase(evt, this.kpi2ReportId);
    }
    navigateToTask(evt) {
        this.navigationBase(evt, this.taskReportId);
    }
    navigateToCalls(evt) {
        this.navigationBase(evt, this.callReportId);
    }
    navigateToEmails(evt) {
        this.navigationBase(evt, this.emailReportId);
    }
    navigateToEvents(evt) {
        this.navigationBase(evt, this.eventReportId);
    }

    round(value, decimals) {
        if (value)
        {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }else{
            return undefined;
        }
    }
}