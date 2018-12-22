import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _apiUrl = 'http://localhost:8080/HibernateCRUD/';

  constructor(private _http: HttpClient) {

  }

  public get(route: String) {
    return this._http.get(this._apiUrl + route);
  }

  public delete(id: String) {
    return this._http.delete(this._apiUrl + '/product/' + id);
  }
}
