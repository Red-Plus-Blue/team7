import { Component, OnInit } from '@angular/core';
import { FormSummary } from '../server-objects/form-summary';
import { ServerApiService } from '../server-api.service';
import { Router } from '@angular/router';
import { User }             from '../server-objects/user';
import { Form }             from '../server-objects/form';
import { ServerResponse } from '../server-objects/server-response';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css', 
  '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DashboardEditComponent implements OnInit {

protected formsToEdit : FormSummary[];

    router: Router;

  constructor(router : Router, private serverApi : ServerApiService) { 
      this.router = router;
  }

  ngOnInit() {
    this.formsToEdit = [];
    this.serverApi.listForms("edit").subscribe(
          (response: ServerResponse) => {
              this.formsToEdit = <FormSummary[]>response.object;
              
          }
    );
  }

  editForm() {
        this.serverApi.readForm(1).subscribe(
            (response: ServerResponse) => {
                this.serverApi.setForm(<Form>response.object);
                this.router.navigateByUrl('/master');
            }
        )
    
  }
}
