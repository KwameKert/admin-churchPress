import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {CrudService} from '../../../shared/service/crud.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { ViewSermonComponent } from '../view-sermon/view-sermon.component';
import {DeleteItemComponent} from '../../../shared/delete-item/delete-item.component';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-sermons',
  templateUrl: './list-sermons.component.html',
  styleUrls: ['./list-sermons.component.scss']
})
export class ListSermonsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'speaker','category', 'uploaded', 'action'];
  dataSource : any;
  responseData: any;
  showTable: boolean;
  isLoading: boolean ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private _toastr: ToastrService, public dialog: MatDialog, private _crudService: CrudService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  
    this.isLoading  = true;
    this.listSermons();
    
   // this.ngxService.stopLoader('loader-03');
  }

  listSermons(){
    this._crudService.fetchAll("sermon").subscribe(data=>{
      this.responseData = data;
      this.dataSource = new MatTableDataSource(this.responseData.data);
      this.dataSource.paginator = this.paginator;
      this.showTable=true;
      this.isLoading = false;
    }, error=>{
      this._toastr.error("Oops an error. 🥺","",{
        timeOut:2000
      })
    })

   
  }

public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  openSermon(sermon): void {
    const dialogRef = this.dialog.open(ViewSermonComponent, {
      width: '850px',
      height: '380px',
      data: sermon
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  deleteSermon(id: Number){
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
        this._snackBar.open("Sermon Deleted 🙂  ", "", {
          duration: 2000,
        });
        this.listSermons();

      }else{

        this._toastr.error("Oops an error. 🥺","",{
          timeOut:2000
        })
      }
    });
  }


  

}
