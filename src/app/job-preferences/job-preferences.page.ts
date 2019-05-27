import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-preferences',
  templateUrl: './job-preferences.page.html',
  styleUrls: ['./job-preferences.page.scss'],
})
export class JobPreferencesPage implements OnInit {

  showLevel1 = null;
  showLevel2 = null;
  content: any = [];
  constructor() {}

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  }  

  

  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  }

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  }

  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  }
  ngOnInit() {
  }

}
