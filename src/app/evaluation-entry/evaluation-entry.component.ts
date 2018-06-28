import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { EvaluationEntry } from './evaluation-entry';


@Component({
    selector: 'app-evaluation-entry',
    templateUrl: './evaluation-entry.component.html',
    styleUrls: [
        './evaluation-entry.component.css', 
        '../../../node_modules/bootstrap/dist/css/bootstrap.css'
    ]

})
export class EvaluationEntryComponent implements OnInit {

    @Input()
    entry : EvaluationEntry;

    isSupervisor        : boolean = false;
    isReviewingOfficer  : boolean = false;
    isEmployee          : boolean = false;

    constructor(private activatedRoute: ActivatedRoute) { 
        this.entry = new EvaluationEntry();
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

    buttonDelete(event: Event): void {
        this.entry.deleteCallback.call(this.entry);
    }
}