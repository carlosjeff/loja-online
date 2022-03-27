import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {PaginatorModule} from 'primeng/paginator';
import { TitleComponent } from './title/title.component';
import {ImageModule} from 'primeng/image';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    ListComponent,
    ProductsComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ListboxModule,
    DropdownModule,
    FormsModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    PaginatorModule,
    ImageModule,
    DividerModule
  ]
})
export class ProductsModule { }
