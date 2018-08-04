import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerApiService } from '../server-api.service';
import { ServerResponse } from '../server-objects/server-response';

@Component({
  selector: 'app-screen-login',
  templateUrl: './screen-login.component.html',
  styleUrls: [
      './screen-login.component.css',
      '../../../node_modules/bootstrap/dist/css/bootstrap.css'
    ]
})
export class ScreenLoginComponent implements OnInit {

    protected router : Router;
    
    private username : string = "";
    private password : string = "";

    private loginErrorMessage : string;

  constructor(router : Router, private serverApi : ServerApiService) { 
      this.router = router;
  }

  ngOnInit() {
  }

  buttonLogin() : void {

        this.serverApi.login(this.username, this.password).subscribe(
            (response: ServerResponse) => {
                if(response.object != null) {
                    this.router.navigateByUrl('/evaluation');
                } else { 
                    this.loginFailed(null);
                }
            },
            (error) => {
                let response = <ServerResponse>error.error;
                this.loginFailed(response.error.errorMessage);
            }
        );

  }

  loginFailed(error: string) : void {
    if(error == null || error == undefined) {
        error = "An unkown error occured while logging in.";
    }

    this.password = "";
    this.loginErrorMessage = error;
  }
}
