import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('cd', { static: false }) private countdown;
  leftTime = 30;
  status: boolean = true;
  found: boolean = false;

  constructor(private _toastr: ToastrService) { }

  ngOnInit() {

    
    this.isSiteOnline("http://www.facebook.com",function(found){
      
    if(found) {
     
     // this.found = true;
     // this.status  = true;
    }
    else {
    //  console.log("not found")
      // this.status = false;
    }
})

//console.log(this.found)

  }


  handleEvent(event: any){
  if(event.left < 1){
    console.log("Counter done")
  }  
  }


  isSiteOnline(url,callback) {
    // try to load favicon
    var timer = setTimeout(function(){
        // timeout after 5 seconds
        callback(false);
    },5000)

    var img = document.createElement("img");
    img.onload = function() {
        clearTimeout(timer);
        callback(true);
    }

    img.onerror = function() {
        clearTimeout(timer);
        callback(false);
    }

    img.src = url+"/favicon.ico";
}




}
