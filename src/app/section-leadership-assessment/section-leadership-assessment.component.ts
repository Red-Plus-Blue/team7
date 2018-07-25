import { Component, OnInit, Input } from '@angular/core';
import { LeadershipAssessmentSection } from '../server-objects/sections/leadership-assessment-section';
import { Section } from '../server-objects/section';

@Component({
  selector: 'app-section-leadership-assessment',
  templateUrl: './section-leadership-assessment.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
  ]
})
export class SectionLeadershipAssessmentComponent implements OnInit {

    section : LeadershipAssessmentSection;
    @Input() inputSection : Section;

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as LeadershipAssessmentSection;
        console.log(this.section.ratings);
    }

}
