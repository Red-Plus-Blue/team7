import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-evaluation-pay-form',
  templateUrl: './screen-evaluation-pay-form.component.html',
  styleUrls: [
  	'./screen-evaluation-pay-form.component.css',
  	'../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})

export class ScreenEvaluationPayFormComponent implements OnInit {
 	constructor() { }

  	ngOnInit() {
  	}   
    private entArray: Array<any> = [];
    private newentry: any = {};
    private goalArray: Array<any> = [];
    private newgoal: any = {};
    addEntry() {
        this.entArray.push(this.newentry)
        this.newentry = {};
    }

    deleteEntry(index) {
        this.entArray.splice(index, 1);
    }
    addGoal() {
        this.goalArray.push(this.newgoal)
        this.newgoal = {};
    }

    deleteGoal(index1) {
        this.goalArray.splice(index1, 1);
    }
}
