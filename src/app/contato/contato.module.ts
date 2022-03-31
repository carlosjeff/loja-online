import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    ButtonModule
  ],
  exports:[
    ContatoComponent
  ]
})
export class ContatoModule { }
