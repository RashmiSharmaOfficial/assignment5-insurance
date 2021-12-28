import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { HomeComponent } from './home/home.component';
import { insuranceFetch } from './insurance-fetch';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponentComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [insuranceFetch],
  bootstrap: [AppComponent]
})
export class AppModule { }
