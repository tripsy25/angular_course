import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ReactiveForm } from './product/reactiveForm.component';
import { AppleOfficeComponent } from './apple-office/apple-office.component';
import { AppleEmployeeComponent } from './apple-employee/apple-employee.component';
import { PapaComponent } from './papa/papa.component';
import { ChildComponent } from './child/child.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CustomDirective } from './custom-style.directive';
import { ProductsService } from './products.service';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent, 
    ProductsComponent, 
    ProductComponent, 
    ReactiveForm, 
    AppleOfficeComponent, 
    AppleEmployeeComponent, 
    PapaComponent, 
    ChildComponent, 
    Comp1Component, 
    Comp2Component,
    CustomDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
