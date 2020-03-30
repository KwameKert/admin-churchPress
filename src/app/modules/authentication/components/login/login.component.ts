import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  response: any;
  constructor(private router: Router,  private fb: FormBuilder, private _authService: AuthService, private _toastr: ToastrService, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {

this.clearStorage();
    this.loginForm = this.fb.group({
      userName : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    })
  }

  loginUser(){
    this.ngxService.start();
    this._authService.getUserDetails(this.loginForm.value).subscribe(data=>{

      this.response = data;
      let user = {
        token : this.response.jwt,
        userName: this.response.user.userName,
        role: this.response.user.role
      }
      this._authService.setUserDetails(user);

      this._toastr.success("Welcome to ChurchPress 🙂","",{
        timeOut:2000
      })
     

      this.router.navigate(['/dashboard']);
      
    }, error=>{
      this._toastr.info("Invalid credentials. 🥺","",{
        timeOut:2000
      })

    })

    this.ngxService.stop();
  }

  clearStorage(){
    this._authService.logUserOut();
  }

}
