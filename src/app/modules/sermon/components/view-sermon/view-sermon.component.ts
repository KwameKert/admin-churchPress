import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-sermon',
  templateUrl: './view-sermon.component.html',
  styleUrls: ['./view-sermon.component.scss']
})
export class ViewSermonComponent implements OnInit {
 
  constructor(
    public dialogRef: MatDialogRef<ViewSermonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
