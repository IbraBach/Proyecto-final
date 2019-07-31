import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { DetailspComponent } from './detailsp/detailsp.component';
import { ProductsListComponent } from './productsList/productsList.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ButtonRenderComponent } from './butto.render.component/butto.render.component';
import { MaterialDesignModule } from '../material-design/material-design.module';


@NgModule({
    declarations: [
      WelcomeComponent,
      CategoryComponent,
      DetailspComponent,
      ProductsListComponent,
      AddProductComponent,
      ButtonRenderComponent
    ],
    imports: [
      MainRoutingModule,
      HttpClientModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      Ng2SmartTableModule,
      MaterialDesignModule
    ],
    providers: [ProductService, DetailspComponent],
    bootstrap: [WelcomeComponent, ButtonRenderComponent]
  })
  export class MainModule { }
  