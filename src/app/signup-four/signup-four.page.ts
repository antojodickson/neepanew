import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-four',
  templateUrl: './signup-four.page.html',
  styleUrls: ['./signup-four.page.scss'],
})
export class SignupFourPage implements OnInit {

  constructor(
    public router: Router
  ) { }


  signupfourb() {
    this.router.navigateByUrl('/signup-fourb');
  }

  ngOnInit() {
  }

}
