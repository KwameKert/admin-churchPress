import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private _baseUrl :String = environment.api_host;
  constructor(private _httpClient: HttpClient) { }




  public fetchItem({id, module}){
    return this._httpClient.get(`${this._baseUrl}/${module}/${id}`)
  }

  
}
