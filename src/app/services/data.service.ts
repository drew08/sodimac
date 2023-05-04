import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Contenedores } from 'src/app/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  mydata = Contenedores
  
  constructor(private http: HttpClient) { }

  public searchItemList : any =[]

  getData(){
   return of(this.mydata)
   }
  

}
