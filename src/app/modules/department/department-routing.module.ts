import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { ListDepartmentComponent } from './components/list-department/list-department.component';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';

const routes: Routes = [ 

  {path: 'add', component: AddDepartmentComponent},
  {path: 'list', component: ListDepartmentComponent},
  {path: 'update/:id', component: UpdateDepartmentComponent},
  
];

@NgModule({
  declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  
})
export class DepartmentRoutingModule { }
