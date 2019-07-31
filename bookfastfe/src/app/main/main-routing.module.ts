import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailspComponent } from './detailsp/detailsp.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { ProductsListComponent } from './productsList/productsList.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
    {path: '', redirectTo:'welcome',pathMatch:'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'addproduct', component: AddProductComponent, canActivate:[AuthGuard]},
    {path: 'detailsp', component: DetailspComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'productsList', component: ProductsListComponent, canActivate:[AuthGuard]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }