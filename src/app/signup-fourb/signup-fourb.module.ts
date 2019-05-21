import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupFourbPage } from './signup-fourb.page';

const routes: Routes = [
  {
    path: '',
    component: SignupFourbPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupFourbPage]
})
export class SignupFourbPageModule {}
