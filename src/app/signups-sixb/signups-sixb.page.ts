import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signups-sixb',
  templateUrl: './signups-sixb.page.html',
  styleUrls: ['./signups-sixb.page.scss'],
})
export class SignupsSixbPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  seven() {
    this.router.navigateByUrl('/signups-seven');
  }
  
  ngOnInit() {
  }

}
