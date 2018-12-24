import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
