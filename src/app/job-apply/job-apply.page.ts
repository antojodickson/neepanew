import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.page.html',
  styleUrls: ['./job-apply.page.scss'],
})
export class JobApplyPage implements OnInit {

  constructor(
    public router: Router
  ) { }
  confirm() {
    this.router.navigateByUrl("confirmation");
  }

  ngOnInit() {
  }

}
