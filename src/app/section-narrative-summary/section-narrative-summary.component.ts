import { Component, OnInit, Input } from '@angular/core';
import { NarrativeSummarySection } from '../server-objects/sections/narrative-summary-section';
import { Section } from '../server-objects/section';

@Component({
  selector: 'app-section-narrative-summary',
  templateUrl: './section-narrative-summary.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
  ]
})
export class SectionNarrativeSummaryComponent implements OnInit {

    section : NarrativeSummarySection;
    @Input() inputSection : Section;

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as NarrativeSummarySection;
        console.log(this.section.summary);
    }

}
