import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DeleteService} from '../service/delete.service';
@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _deleteService: DeleteService) { }

  ngOnInit() {
  
    console.log(this.data);
  }

  close(){
    this.dialogRef.close();
  }


  delete(){
    this._deleteService.deleteItem(this.data).subscribe(data=>{
      this.dialogRef.close({event:true});
    }, error=>{
      console.warn(error);
      this.dialogRef.close({event:false});
    })
    console.log("Item deleted")
  }
}
