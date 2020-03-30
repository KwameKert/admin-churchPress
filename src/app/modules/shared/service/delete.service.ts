import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  private _baseUrl :String = environment.api_host;
  constructor(private _httpClient: HttpClient) { }
 
  
  deleteItem({id, module}){
   return this._httpClient.delete(`${this._baseUrl}/${module}/`,id);
  }
 
}
