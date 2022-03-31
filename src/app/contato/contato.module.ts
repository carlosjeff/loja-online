import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {GMapModule} from 'primeng/gmap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    GMapModule,

  ],
  exports:[
    ContatoComponent
  ]
})
export class ContatoModule { }
