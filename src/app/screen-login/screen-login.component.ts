import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(router : Router) { 
      this.router = router;
  }

  ngOnInit() {
  }

  buttonLogin() : void {
      this.router.navigateByUrl('/evaluation');
  }
}
