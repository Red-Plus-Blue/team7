import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerApiService } from '../server-api.service';
import { User }             from '../server-objects/user';

@Component({
  selector: 'app-screen-dashboard',
  templateUrl: './screen-dashboard.component.html',
  styleUrls: [
      './screen-dashboard.component.css', 
        '../../../node_modules/bootstrap/dist/css/bootstrap.css'
    ]
})
export class ScreenDashboardComponent implements OnInit {

    protected router: Router;
    protected user: User;
    protected view: string = "edit";

    constructor(router : Router, private serverApi : ServerApiService) { 
        this.router = router;
    }

    ngOnInit() {
        this.user = this.serverApi.getUser();
    }

    buttonCreate() : void {
        this.view = "create";
    }

    buttonEdit() : void {
        this.view = "edit";
    }

    buttonReview() : void {
        this.view = "review";        
    }

}
