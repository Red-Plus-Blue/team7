import { Component, OnInit, Input } from '@angular/core';
import { NarrativeSummarySection } from '../server-objects/sections/narrative-summary-section';
import { Section } from '../server-objects/section';
import { RomanNumeralConverter } from '../util/roman-numeral-conversion';


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
    @Input() sectionNumber : number;
    protected sectionNumberInRomanNumerals : string = "I";


    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as NarrativeSummarySection;
        console.log(this.section.summary);
    }

}
