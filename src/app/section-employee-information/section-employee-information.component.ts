import { Component, OnInit, Input } from '@angular/core';
import { EmployeeInformationSection } from '../server-objects/sections/employee-information-section';
import { Section } from '../server-objects/section';

@Component({
  selector: 'app-section-employee-information',
  templateUrl: './section-employee-information.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
    ]
})
export class SectionEmployeeInformationComponent implements OnInit {

    section : EmployeeInformationSection;
    @Input() inputSection : Section;

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as EmployeeInformationSection;
        console.log(this.section.name);
    }

}
