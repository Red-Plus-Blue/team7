import { Component, OnInit, Input } from '@angular/core';
import { CoreValuesSection } from '../server-objects/sections/core-values-section';
import { Section } from '../server-objects/section';
import { RomanNumeralConverter } from '../util/roman-numeral-conversion';

@Component({
  selector: 'app-section-core-values',
  templateUrl: './section-core-values.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
    ]
})
export class SectionCoreValuesComponent implements OnInit {

    section : CoreValuesSection;
    @Input() inputSection : Section;
    @Input() sectionNumber : number;

    protected sectionNumberInRomanNumerals : string = "I";

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as CoreValuesSection;
        this.sectionNumberInRomanNumerals = RomanNumeralConverter.getRomanNumerals(this.sectionNumber);
    }

}
