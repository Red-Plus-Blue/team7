import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerApiService } from '../server-api.service';
import { Form } from '../server-objects/form';
import { ServerResponse } from '../server-objects/server-response';


@Component({
  selector: 'app-screen-master-form',
  templateUrl: './screen-master-form.component.html',
  styleUrls: [
      '../../../node_modules/bootstrap/dist/css/bootstrap.css',
      '../../assets/css-common/common.css'
    ]
})
export class ScreenMasterFormComponent implements OnInit {

    form            : Form;
    departments     : String[];

    constructor(router : Router, private serverApi : ServerApiService) { 
        this.departments    = serverApi.getDepartmentList().object;
        this.form = this.serverApi.getForm();
        console.log(this.form);
    }

    ngOnInit() {

     }
}
