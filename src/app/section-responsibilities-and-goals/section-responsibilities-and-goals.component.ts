import { Component, OnInit, Input } from '@angular/core';
import { ResponsibilitiesAndGoalsSection } from '../server-objects/sections/responsibilities-and-goals-section';
import { Section } from '../server-objects/section';
import { ResponsibilitiesGoalsMeasuresEntry } from '../server-objects/section-entries/responsibilities-goals-measures-entry';
import { RomanNumeralConverter } from '../util/roman-numeral-conversion';


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
    @Input() sectionNumber : number;
    protected sectionNumberInRomanNumerals : string = "I";

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as ResponsibilitiesAndGoalsSection;
        if(this.section.goals.length == 0) {
            this.addGoal();
        }
    }

    addGoal() {
        let newGoal = new ResponsibilitiesGoalsMeasuresEntry();
        this.section.goals.push(newGoal);

        for(let i = 0; i < this.section.goals.length; i++) {
            this.section.goals[i].entryNumber = i + 1;
        }
    }

    deleteGoal(goalNumber) {
        let goalIndex = -1;

        for(let i = 0; i < this.section.goals.length; i++) {
            if(this.section.goals[i].entryNumber == goalNumber) {
                goalIndex = i;
            }
        }

        if(goalIndex >= 0) {
            this.section.goals.splice(goalIndex, 1);
        }

        for(let i = 0; i < this.section.goals.length; i++) {
            this.section.goals[i].entryNumber = i + 1;
        }
    }

}
