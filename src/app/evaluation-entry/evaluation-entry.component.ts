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

    constructor() { 
        this.entry = new EvaluationEntry();
    }

    ngOnInit() {

    }

    buttonDelete(event: Event): void {
        this.entry.deleteCallback.call(this.entry);
    }
}