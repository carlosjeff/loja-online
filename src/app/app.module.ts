import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
