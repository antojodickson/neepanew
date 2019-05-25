import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.page.html',
  styleUrls: ['./job-description.page.scss'],
})
export class JobDescriptionPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  jobapply() {
    this.router.navigateByUrl("/job-apply")
  }

  ngOnInit() {
  }

}
