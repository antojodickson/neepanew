import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-fiveb',
  templateUrl: './signup-fiveb.page.html',
  styleUrls: ['./signup-fiveb.page.scss'],
})
export class SignupFivebPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  signupsix() {
    this.router.navigateByUrl('/signups-six')
  }

  ngOnInit() {
  }

}
