import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SermonService {

  private _baseUrl :String = environment.api_host;
  constructor(private _httpClient: HttpClient) { }


  addSermon(data: any){
    return this._httpClient.post(`${this._baseUrl}/sermon/`, data);
  }

  listSermon(){
    return this._httpClient.get(`${this._baseUrl}/sermon/`);
  }
  
}
