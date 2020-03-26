import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  constructor(private router: Router, private fb: FormBuilder, private _authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    })
  }

  loginUser(){
    this._authService.getUserDetails(this.loginForm.value).subscribe(data=>{

    }, error=>{
      
    })
    this.router.navigate(['dashboard']);
  }

}
