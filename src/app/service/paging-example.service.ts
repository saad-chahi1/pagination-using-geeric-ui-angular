import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PagingExampleService {

  constructor(private http: HttpClient) { }

  getHeroes():  Observable<any>  {
    // get users from api
    return this.http.get('assets/data.json');
  } 
}
