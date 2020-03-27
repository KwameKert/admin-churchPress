import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _toastr: ToastrService) { }

  ngOnInit() {

  }


  handleEvent(event: any){
  if(event.left < 1){
    console.log("Counter done")
  }  
  }
}
