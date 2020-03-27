import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSermonComponent } from './components/add-sermon/add-sermon.component';
import { ListSermonsComponent } from './components/list-sermons/list-sermons.component';
import { UpdateSermonsComponent } from './components/update-sermons/update-sermons.component';
import { SermonRoutingModule } from './sermon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AddSermonComponent,
    ListSermonsComponent,
    UpdateSermonsComponent
  ],
  imports: [
    CommonModule,
    SermonRoutingModule,
    SharedModule
  ]
})
export class SermonModule { }
