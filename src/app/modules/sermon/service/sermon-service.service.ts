import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SermonServiceService {

  private _baseUrl :String = environment.api_host;
  constructor(private _httpClient: HttpClient) { }


  public addSermon(data: any){
    return this._httpClient.post(`${this._baseUrl}/sermon/`, data);
  }

}
