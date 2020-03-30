import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSermonComponent } from './components/add-sermon/add-sermon.component';
import { ListSermonsComponent } from './components/list-sermons/list-sermons.component';
import { UpdateSermonsComponent } from './components/update-sermons/update-sermons.component';
import { SermonRoutingModule } from './sermon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewSermonComponent } from './components/view-sermon/view-sermon.component';



@NgModule({
  declarations: [
    AddSermonComponent,
    ListSermonsComponent,
    UpdateSermonsComponent,
    ViewSermonComponent
  ],
  imports: [
    CommonModule,
    SermonRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ViewSermonComponent,
  ]
})
export class SermonModule { }
