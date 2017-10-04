import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ProductsResolver} from '../products.resolver';
import {ProductsService} from './products.service';
import {AppRoutingModule} from './app-routing.module';
import {ApiService} from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductsService, ApiService, ProductsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
