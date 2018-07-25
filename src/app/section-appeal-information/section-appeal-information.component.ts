import { Component, OnInit, Input } from '@angular/core';
import { AppealInformationSection } from '../server-objects/sections/appeal-information-section';
import { Section } from '../server-objects/section';

@Component({
  selector: 'app-section-appeal-information',
  templateUrl: './section-appeal-information.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
  ]
})
export class SectionAppealInformationComponent implements OnInit {

    section : AppealInformationSection;
    @Input() inputSection : Section;
    @Input() departments : String[];

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as AppealInformationSection;
    }

}
