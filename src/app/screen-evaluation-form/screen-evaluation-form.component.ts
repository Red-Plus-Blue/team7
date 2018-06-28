import { Component, OnInit } from '@angular/core';
import { EvaluationEntryComponent } from '../evaluation-entry/evaluation-entry.component';
import { EvaluationEntry } from '../evaluation-entry/evaluation-entry';

@Component({
    selector: 'app-screen-evaluation-form',
    templateUrl: './screen-evaluation-form.component.html',
    styleUrls: [
        './screen-evaluation-form.component.css',
        '../../../node_modules/bootstrap/dist/css/bootstrap.css'
    ]
})
export class ScreenEvaluationFormComponent implements OnInit {

    summaryEntries : EvaluationEntry[];

    isSupervisor        : boolean = true;
    isReviewingOfficer  : boolean = false;
    isEmployee          : boolean = false;

    constructor() { 
        this.summaryEntries = [];
        this.createEntry();
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

    ngOnInit() {
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
