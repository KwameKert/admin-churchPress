import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    })
  }

  loginUser(){
    console.log("Logging User in")
    this.router.navigate(['dashboard']);
  }

}
