import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupsSixbPage } from './signups-sixb.page';

const routes: Routes = [
  {
    path: '',
    component: SignupsSixbPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupsSixbPage]
})
export class SignupsSixbPageModule {}
