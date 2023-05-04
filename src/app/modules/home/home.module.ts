import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsComponent } from 'src/app/components';
import { TableComponent } from 'src/app/components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableComponent,
    ChartsComponent
  ]
})
export class HomeModule { }
