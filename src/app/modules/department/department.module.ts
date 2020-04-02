import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';
import { ListDepartmentComponent } from './components/list-department/list-department.component';
import { ViewDepartmentComponent } from './components/view-department/view-department.component';
import { DepartmentRoutingModule } from './department-routing.module';


@NgModule({
  declarations: [ 
    AddDepartmentComponent,
    ListDepartmentComponent,
    UpdateDepartmentComponent,
    ViewDepartmentComponent,],
  imports: [
    CommonModule,
    SharedModule,
    DepartmentRoutingModule
  ],
})
export class DepartmentModule { }
