import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { Form } from '../server-objects/form';


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

    constructor(private serverApi : ServerApiService) { 
        this.form           = serverApi.readForm(1).object;
        this.departments    = serverApi.getDepartmentList().object;
    }

    ngOnInit() { }
}
