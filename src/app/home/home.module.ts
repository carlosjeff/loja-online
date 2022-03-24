import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ]
})
export class HomeModule { }
