import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class HomeModule { }
