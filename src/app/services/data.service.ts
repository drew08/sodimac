import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {


 // json server 
  baseURL: string = "http://localhost:3000/Contenedores";

  constructor(private http: HttpClient) { }

  public searchItemList : any =[]

  getData(){
    
    return this.http.get(`${this.baseURL}`);
   }
  

}
