import { Component, OnInit, Input } from '@angular/core';
import { WrittenAppealSection } from '../server-objects/sections/written-appeal-section';
import { Section } from '../server-objects/section';

@Component({
  selector: 'app-section-written-appeal',
  templateUrl: './section-written-appeal.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
  ]
})
export class SectionWrittenAppealComponent implements OnInit {

    section : WrittenAppealSection;
    @Input() inputSection : Section;

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as WrittenAppealSection;
    }

}
