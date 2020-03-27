import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from 'src/app/layouts/default/default.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SermonRoutingModule } from '../sermon/sermon-routing.module';



@NgModule({
  declarations: [
    DefaultComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SermonRoutingModule

  ]
})
export class SettingsModule { }
