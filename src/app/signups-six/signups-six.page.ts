import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signups-six',
  templateUrl: './signups-six.page.html',
  styleUrls: ['./signups-six.page.scss'],
})
export class SignupsSixPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  signupsixb() {
    this.router.navigateByUrl('/signups-sixb');
  }

  ngOnInit() {
  }

}
