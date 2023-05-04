import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TableComponent } from 'src/app/components/table';
import { ChartsComponent } from 'src/app/components/charts/charts.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableComponent,
    ChartsComponent
  ]
})
export class HomeModule { }
