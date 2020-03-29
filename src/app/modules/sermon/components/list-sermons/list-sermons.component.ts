import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {SermonService} from '../../service/sermon.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewSermonComponent } from '../view-sermon/view-sermon.component';
import {DeleteItemComponent} from '../../../shared/delete-item/delete-item.component';



@Component({
  selector: 'app-list-sermons',
  templateUrl: './list-sermons.component.html',
  styleUrls: ['./list-sermons.component.scss']
})
export class ListSermonsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'speaker','category', 'uploaded', 'action'];
  dataSource : any;
  responseData: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _sermonService: SermonService, private _toastr: ToastrService, public dialog: MatDialog) { }

  ngOnInit() {
    this.listSermons();
  }

  listSermons(){
    this._sermonService.listSermon().subscribe(data=>{
      this.responseData = data;
      this.dataSource = new MatTableDataSource(this.responseData.data);
      this.dataSource.paginator = this.paginator;
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
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '850px',
      height: '380px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  

}
