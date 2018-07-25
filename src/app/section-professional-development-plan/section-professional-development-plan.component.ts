import { Component, OnInit, Input } from '@angular/core';
import { ProfessionalDevelopmentPlanSection } from '../server-objects/sections/porfessional-development-plan-section';
import { Section } from '../server-objects/section';

@Component({
  selector: 'app-section-professional-development-plan',
  templateUrl: './section-professional-development-plan.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
  ]
})
export class SectionProfessionalDevelopmentPlanComponent implements OnInit {

    section : ProfessionalDevelopmentPlanSection;
    @Input() inputSection : Section;

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as ProfessionalDevelopmentPlanSection;
        console.log(this.section.goals);
    }

}
