import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CounterComponent } from './components/counter/counter.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  exports : [
    DashboardComponent
  ]
})
export class SettingsModule { }
