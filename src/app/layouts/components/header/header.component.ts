import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {AuthService} from '../../../modules/authentication/service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe : EventEmitter<any> = new EventEmitter();
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.toggleSidebarForMe.emit();
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


  logout(){

    if(this._authService.logUserOut()){
      this._router.navigate(['/login']);
    }else{
      console.warn("Error ")
    }
   
  }

}
