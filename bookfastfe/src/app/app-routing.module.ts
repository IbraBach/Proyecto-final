import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path: '', redirectTo:'main',pathMatch:'full'},
  {path: 'main', loadChildren: './main/main.module#MainModule'},
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path:'login', component: LoginComponent},
  {path:'signin', component: SigninComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
