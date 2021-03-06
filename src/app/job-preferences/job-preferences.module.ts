import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-accordion';


import { IonicModule } from '@ionic/angular';

import { JobPreferencesPage } from './job-preferences.page';

const routes: Routes = [
  {
    path: '',
    component: JobPreferencesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AccordionModule
  ],
  declarations: [JobPreferencesPage]
})
export class JobPreferencesPageModule {}
