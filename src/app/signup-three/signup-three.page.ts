import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-three',
  templateUrl: './signup-three.page.html',
  styleUrls: ['./signup-three.page.scss'],
})
export class SignupThreePage implements OnInit {

  constructor(
    public router: Router
  ) { }


  signupfour() {
    this.router.navigateByUrl('/signup-four');
  }
  ngOnInit() {
  }

}
