import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl :String = environment.api_host;
  private loggedInStatus = localStorage.getItem("status");

  constructor(private _httpClient: HttpClient) { }

  getUserDetails(data: any ){
    return this._httpClient.post(`${this._baseUrl}/authenticate/`, data);
  }

  setUserDetails(authData: any){
    localStorage.setItem("userName", authData.userName);
    localStorage.setItem("role", authData.role);
    localStorage.setItem("status", "active" )
  }

  logUserOut(){

    try{

      localStorage.removeItem("userName");
      localStorage.removeItem("role");
      localStorage.removeItem("status");
      return true;
    }catch(err){
      throw err;
    }
  }

  public get isLoggedIn(){
    return this.loggedInStatus;
  }



}
