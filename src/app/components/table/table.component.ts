import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Contenedor } from 'src/app/models';
import { Contenedores } from 'src/app/data';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataDetails: Array<Contenedor> = [];
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.dataService.getData().subscribe((result:any)=>
    {
      this.dataDetails =  result;

    });
  }

}
