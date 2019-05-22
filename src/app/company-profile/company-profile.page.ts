import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.page.html',
  styleUrls: ['./company-profile.page.scss'],
})
export class CompanyProfilePage implements OnInit {

  constructor(
    public router: Router
  ) { }

  jobdes() {
    this.router.navigateByUrl('/job-description');
  }

  ngOnInit() {
  }

}
