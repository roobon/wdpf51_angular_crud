import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './form-validation/form-validation.component';


@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent, AppComponent, UsersComponent, FormValidationComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
