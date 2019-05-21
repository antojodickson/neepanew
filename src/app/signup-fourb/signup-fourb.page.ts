import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-fourb',
  templateUrl: './signup-fourb.page.html',
  styleUrls: ['./signup-fourb.page.scss'],
})
export class SignupFourbPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  signupfive() {
    this.router.navigateByUrl('/signup-five');
  }

  ngOnInit() {
  }

}
