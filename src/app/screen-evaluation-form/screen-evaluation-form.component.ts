import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EvaluationEntry } from '../evaluation-entry/evaluation-entry';

@Component({
    selector: 'app-screen-evaluation-form',
    templateUrl: './screen-evaluation-form.component.html',
    styleUrls: [
        './screen-evaluation-form.component.css',
        '../../../node_modules/bootstrap/dist/css/bootstrap.css',
        '../../assets/css-common/common.css'
    ]
})
export class ScreenEvaluationFormComponent implements OnInit {

    summaryEntries : EvaluationEntry[];

    isSupervisor        : boolean = false;
    isReviewingOfficer  : boolean = false;
    isEmployee          : boolean = false;

    constructor(private activatedRoute : ActivatedRoute) { 
        this.summaryEntries = [];
        this.createEntry();
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            let role = params['role'];
            if(role === "employee") {
                this.isEmployee = true;
            }
            if(role === "supervisor") {
                this.isSupervisor = true;
            }
            if(role === "reviewing_officer") {
                this.isReviewingOfficer = true;
            }
          });
    }

    createEntry() : void {
        let entry = new EvaluationEntry();
        var myself = this;
        entry.entryNumber = this.summaryEntries.length + 1;
        entry.deleteCallback = function() : void {
            myself.deleteEntry(entry);
        };
        this.summaryEntries.push(entry);

    }

    refreshEntries() : void {
        this.summaryEntries.forEach((element, index) => element.entryNumber = (index + 1));
    }

    buttonAddSummaryEntry(event : Event) : void { 
        this.createEntry();
    }

    deleteEntry(entry: EvaluationEntry) : void {
        this.summaryEntries = this.summaryEntries.filter(element => element.entryNumber !== entry.entryNumber);
        this.refreshEntries();
    }
}
