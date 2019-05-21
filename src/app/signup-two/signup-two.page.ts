import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-two',
  templateUrl: './signup-two.page.html',
  styleUrls: ['./signup-two.page.scss'],
})
export class SignupTwoPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  
  signupthree() {
    this.router.navigateByUrl('/signup-three');
  }

  ngOnInit() {
  }

}
