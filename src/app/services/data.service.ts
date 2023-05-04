import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Contenedores } from 'src/app/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  mydata = Contenedores
 // json server 
  //baseURL: string = "http://localhost:3000/Contenedores";

  constructor(private http: HttpClient) { }

  public searchItemList : any =[]

  getData(){
   return of(this.mydata)
   //return this.http.get(`${this.baseURL}`);
   }
  

}
