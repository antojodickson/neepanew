import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupsSevenPage } from './signups-seven.page';

const routes: Routes = [
  {
    path: '',
    component: SignupsSevenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupsSevenPage]
})
export class SignupsSevenPageModule {}
