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
	public count = 1;
 	constructor() { }

  	ngOnInit() {
  	}
  	addEntry(value){
  		value=this.count;
  		console.log(value)
  		this.count+=1;
  		value=this.count;
  		
  	}
}
