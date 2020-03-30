import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-sermon',
  templateUrl: './view-sermon.component.html',
  styleUrls: ['./view-sermon.component.scss']
})
export class ViewSermonComponent implements OnInit {
 
  sermonUrl : any;
  constructor(
    public dialogRef: MatDialogRef<ViewSermonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _sanitizer: DomSanitizer) { 
      this.sermonUrl = this._sanitizer.bypassSecurityTrustResourceUrl(data.url);
    }

  ngOnInit() {
    console.log(this.data.url)
  }

  close(): void {
    this.dialogRef.close();
  }

}
