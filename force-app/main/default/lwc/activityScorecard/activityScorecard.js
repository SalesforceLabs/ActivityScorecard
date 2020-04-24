/**
 * Created by jonathan.linn on 4/16/20.
 */

import {LightningElement, api, wire} from 'lwc';
import getBasicReport from '@salesforce/apex/ReportsValues.getBasicReport'

export default class ActivityScorecard extends LightningElement {

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

    get KpiOne() {
        return this.round(this.kpi1Response.data,2 );
    }

    get KpiTwo() {
        return this.round(this.kpi2Response.data,2 );
    }

    get taskKpi() {
        return this.round(this.taskReportResponse.data, 2);
    }

    get callKpi() {
        return this.round(this.callReportResponse.data, 2);
    }

    get emailKpi() {
        return this.round(this.emailReportResponse.data, 2);
    }

    get eventKpi() {
        return this.round(this.eventReportResponse.data, 2);
    }

    get tasksCompletedPercent() {
        return Math.min(Math.max(this.taskKpi, 0), this.taskGoal) / this.taskGoal * 100;
    }

    get callsCompletedPercent() {
        return Math.min(Math.max(this.callKpi, 0), this.callGoal) / this.callGoal * 100;
    }

    get emailsCompletedPercent() {
        return Math.min(Math.max(this.emailKpi, 0), this.emailGoal) / this.emailGoal * 100;
    }

    get eventsCompletedPercent() {
        return Math.min(Math.max(this.eventKpi, 0), this.eventGoal) / this.eventGoal * 100;
    }

    get tasksCompletedStyleSyntax() {
        return 'width: ' + this.tasksCompletedPercent + '%' + ';background:' + '#4bca81' + ';'
    }

    get callsCompletedStyleSyntax() {
        return 'width: ' + this.callsCompletedPercent + '%' + ';background:' + '#48C3CC' + ';'
    }

    get emailsCompletedStyleSyntax() {
        return 'width: ' + this.emailsCompletedPercent + '%' + ';background:' + '#95AEC5' + ';'
    }

    get eventsCompletedStyleSyntax() {
        return 'width: ' + this.eventsCompletedPercent + '%' + ';background:' + '#EB7092' + ';'
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

    round(value, decimals) {
        if (value)
        {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }else{
            return undefined;
        }
    }
}