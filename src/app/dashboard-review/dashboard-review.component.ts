import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { User }             from '../server-objects/user';
import { FormSummary }             from '../server-objects/form-summary';
import { ServerResponse } from '../server-objects/server-response';

@Component({
  selector: 'app-dashboard-review',
  templateUrl: './dashboard-review.component.html',
  styleUrls: ['./dashboard-review.component.css', 
  '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DashboardReviewComponent implements OnInit {

    protected formsToReview: FormSummary[]; 

  constructor(private serverApi : ServerApiService) { }

  ngOnInit() {
      this.formsToReview = [];
      this.serverApi.listForms("review").subscribe(
            (response: ServerResponse) => {
                console.log(response);
                this.formsToReview = <FormSummary[]>response.object;
            }
      );
  }

}
