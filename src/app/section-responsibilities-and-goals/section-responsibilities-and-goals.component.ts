import { Component, OnInit, Input } from '@angular/core';
import { ResponsibilitiesAndGoalsSection } from '../server-objects/sections/responsibilities-and-goals-section';
import { Section } from '../server-objects/section';

@Component({
  selector: 'app-section-responsibilities-and-goals',
  templateUrl: './section-responsibilities-and-goals.component.html',
  styleUrls: [
      '../../../node_modules/bootstrap/dist/css/bootstrap.css',
        '../../assets/css-common/common.css'
    ]
})
export class SectionResponsibilitiesAndGoalsComponent implements OnInit {

    section : ResponsibilitiesAndGoalsSection;
    @Input() inputSection : Section;

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as ResponsibilitiesAndGoalsSection;
        console.log(this.section.goals);
    }

}
