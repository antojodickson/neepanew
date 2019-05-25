import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  //  },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login-vet', loadChildren: './login-vet/login-vet.module#LoginVetPageModule' },
  { path: 'signup-one', loadChildren: './signup-one/signup-one.module#SignupOnePageModule' },
  { path: 'signup-two', loadChildren: './signup-two/signup-two.module#SignupTwoPageModule' },
  { path: 'signup-three', loadChildren: './signup-three/signup-three.module#SignupThreePageModule' },
  { path: 'signup-four', loadChildren: './signup-four/signup-four.module#SignupFourPageModule' },
  { path: 'signup-fourb', loadChildren: './signup-fourb/signup-fourb.module#SignupFourbPageModule' },
  { path: 'signup-five', loadChildren: './signup-five/signup-five.module#SignupFivePageModule' },
  { path: 'signup-fiveb', loadChildren: './signup-fiveb/signup-fiveb.module#SignupFivebPageModule' },
  { path: 'signups-six', loadChildren: './signups-six/signups-six.module#SignupsSixPageModule' },
  { path: 'signups-sixb', loadChildren: './signups-sixb/signups-sixb.module#SignupsSixbPageModule' },
  { path: 'signups-seven', loadChildren: './signups-seven/signups-seven.module#SignupsSevenPageModule' },
  { path: 'company-profile', loadChildren: './company-profile/company-profile.module#CompanyProfilePageModule' },
  { path: 'job-description', loadChildren: './job-description/job-description.module#JobDescriptionPageModule' },
  { path: 'job-preferences', loadChildren: './job-preferences/job-preferences.module#JobPreferencesPageModule' },
  { path: 'job-apply', loadChildren: './job-apply/job-apply.module#JobApplyPageModule' },
  { path: 'confirmation', loadChildren: './confirmation/confirmation.module#ConfirmationPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
