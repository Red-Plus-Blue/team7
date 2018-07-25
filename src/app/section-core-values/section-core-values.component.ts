import { Component, OnInit, Input } from '@angular/core';
import { CoreValuesSection } from '../server-objects/sections/core-values-section';
import { Section } from '../server-objects/section';

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

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as CoreValuesSection;
        console.log(this.section.ratings);
    }

}
