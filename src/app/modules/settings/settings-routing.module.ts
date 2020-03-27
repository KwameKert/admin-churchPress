import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 

  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'profile', 
    component: ProfileComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
