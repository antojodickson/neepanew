import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-one',
  templateUrl: './signup-one.page.html',
  styleUrls: ['./signup-one.page.scss'],
})
export class SignupOnePage implements OnInit {

  constructor(
    public router: Router
  ) { }

  signuptwo() {
    this.router.navigateByUrl('/signup-three');
  }
  ngOnInit() {
  }

}
