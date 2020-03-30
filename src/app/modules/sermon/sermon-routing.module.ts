import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddSermonComponent } from './components/add-sermon/add-sermon.component';
import { UpdateSermonsComponent } from './components/update-sermons/update-sermons.component';
import { ListSermonsComponent } from './components/list-sermons/list-sermons.component';


const routes: Routes = [ 

  {path: 'add', component: AddSermonComponent},
  {path: 'list', component: ListSermonsComponent},
  {path: 'update/:id', component: UpdateSermonsComponent},
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonRoutingModule { }
