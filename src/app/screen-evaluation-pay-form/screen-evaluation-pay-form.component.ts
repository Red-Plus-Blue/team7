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
  num=1;
  entryd= new entry(1,1,'','';)
  ENTRYS=[new entry(this.num,1,'file1','file2')];
  addEntry(){
    this.num+=1;
    const newEntry=new entry(this.num,this.entryd.rating,this.entryd.goals,this.entryd.summary);
    this.ENTRYS.push(newEntry);
    this.resetEntrys();
  }
  deleteEntry(num:number){
      for (let i = this.ENTRYS.length - 1; i &amp;amp;amp;gt;= 0; i--) {
        if (this.ENTRYS[i].num === num) {
          this.ENTRYS.splice(i, 1);
        }
      }
  }
  resetTeacher() {
     this.entry.rating = 1;
     this.entry.goals = '';
     this.entry.summary = '';
    }
 	constructor() { }

  	ngOnInit() {
  	}   
  class entry{
  constructor(
    public num:number,
    public rating:number,
    public goals:string,
    public summary:string){ }
} 
}
