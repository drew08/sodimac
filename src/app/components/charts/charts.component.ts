import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts' 
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  dataDetails: any[] = [];

  constructor( private dataService: DataService) { }

  public chartData: any = {
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        size:'80%',
        innerSize: '80%',
        borderWidth: 40,
        borderColor: '',
        slicedOffset: 20,
        dataLabels: {
          connectorWidth: 0,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'contenedor',
    },

    legend: {
      enabled: false,
    },


    series: [
      {
        type: 'pie',
        data: [],
      },
    ]

  }


  ngOnInit(): void {

    this.getData();
  }

  showChart () {
 
    var counts = this.dataDetails.reduce((p, c) => {
      var Estado = c.Estado;
      if (!p.hasOwnProperty(Estado)) {
        p[Estado] = 0;
      }
      p[Estado]++;
      return p;
    }, {});

    var countsExtended = Object.keys(counts).map(k => { return {name: k, y: counts[k]}; });
    
    this.chartData.series[0].data  = countsExtended;      
    Highcharts.chart('div-container', this.chartData);   
    }

    getData(){
      this.dataService.getData().subscribe((result:any)=>
      {
        this.dataDetails =  result;
        this.showChart(); 
  
      });
    }


}
