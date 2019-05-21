import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-five',
  templateUrl: './signup-five.page.html',
  styleUrls: ['./signup-five.page.scss'],
})
export class SignupFivePage implements OnInit {

  constructor(
    public router: Router
  ) { }


  signupfiveb() {
    this.router.navigateByUrl('/signup-fiveb');
  }
  ngOnInit() {
  }

  signup() {

  }
}
