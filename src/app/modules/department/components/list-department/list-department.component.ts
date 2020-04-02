import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/service/crud.service';
import { Router } from '@angular/router';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.scss']
})
export class ListDepartmentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description' ,'uploaded', 'action' ];
  dataSource : any;
  responseData: any;
  showTable: boolean;
  isLoading: boolean ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private _toastr: ToastrService, public dialog: MatDialog, private _crudService: CrudService, private _snackBar: MatSnackBar, private _router: Router) { }

  ngOnInit() {
  
    this.isLoading  = true;
    this.listDepartments();
    this.isLoading = false;
  }

  listDepartments(){
    this._crudService.fetchAll("department").subscribe(data=>{
      this.responseData = data;
      if(this.responseData.data != null){
        this.responseData = data;
        this.dataSource = new MatTableDataSource(this.responseData.data);
        this.dataSource.paginator = this.paginator;
        this.showTable=true;
      }
      
    }, error=>{
      this._toastr.error("Oops an error. 🥺","",{
        timeOut:2000
      })
    })

   
  }

public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  // openSermon(sermon): void {
  //   const dialogRef = this.dialog.open(ViewSermonComponent, {
  //     width: '850px',
  //     height: '380px',
  //     data: sermon
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // }


  deleteDepartment(id: Number){
    let data = {
      module: 'sermon',
      id
    }
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this._snackBar.open("Department Deleted 🙂  ", "", {
          duration: 2000,
        });
        this.listDepartments();

      }else{

        this._toastr.error("Oops an error. 🥺","",{
          timeOut:2000
        })
      }
    });
  }


  updateSermon(id: any){
    this._router.navigate([`departments/update/${id}`]);
  }

}
