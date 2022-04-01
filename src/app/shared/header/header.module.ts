import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    OverlayPanelModule,
    TableModule,
    BadgeModule,
    InputNumberModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
