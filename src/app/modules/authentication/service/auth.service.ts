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
    localStorage.setItem("chruchPressUserName", authData.userName);
    localStorage.setItem("churchPressRole", authData.role);
    localStorage.setItem("churchPressToken", authData.token);
    localStorage.setItem("churchPressstatus", "active" )
  }

  logUserOut(){

    try{

      localStorage.removeItem("chruchPressUserName");
      localStorage.removeItem("churchPressRole");
      localStorage.removeItem("churchPressToken");
      localStorage.removeItem("churchPressstatus");
      return true;
    }catch(err){
      throw err;
    }
  }

  public get isLoggedIn(){
    return this.loggedInStatus;
  }



}
