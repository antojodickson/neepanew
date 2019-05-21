import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-vet',
  templateUrl: './login-vet.page.html',
  styleUrls: ['./login-vet.page.scss'],
})
export class LoginVetPage implements OnInit {

  constructor(
    public router: Router
  ) { }


  signupone() {
    this.router.navigateByUrl('/signup-one');
  }
  ngOnInit() {
  }

}
