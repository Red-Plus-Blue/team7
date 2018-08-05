import { Component, OnInit, Input } from '@angular/core';
import { ProfessionalDevelopmentPlanSection } from '../server-objects/sections/porfessional-development-plan-section';
import { ProfessionalDevelopmentPlanEntry } from '../server-objects/section-entries/professional-development-plan-entry';
import { Section } from '../server-objects/section';
import { RomanNumeralConverter } from '../util/roman-numeral-conversion';

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
    @Input() sectionNumber : number;
    protected sectionNumberInRomanNumerals : string = "I";

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as ProfessionalDevelopmentPlanSection;
        if(this.section.goals.length == 0) {
            this.addGoal();
        }
        this.sectionNumberInRomanNumerals = RomanNumeralConverter.getRomanNumerals(this.sectionNumber);
    }

    addGoal() {
        let newGoal = new ProfessionalDevelopmentPlanEntry();
        this.section.goals.push(newGoal);

        for(let i = 0; i < this.section.goals.length; i++) {
            this.section.goals[i].goalNumber = i + 1;
        }
    }

    deleteGoal(goalNumber) {
        let goalIndex = -1;

        for(let i = 0; i < this.section.goals.length; i++) {
            if(this.section.goals[i].goalNumber == goalNumber) {
                goalIndex = i;
            }
        }

        if(goalIndex >= 0) {
            this.section.goals.splice(goalIndex, 1);
        }

        for(let i = 0; i < this.section.goals.length; i++) {
            this.section.goals[i].goalNumber = i + 1;
        }
    }
}
