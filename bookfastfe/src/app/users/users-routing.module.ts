import { RouterModule, Routes } from '@angular/router';
import { ListinguComponent } from './listingu/listingu.component';
import { MeComponent } from './me/me.component';
import { DetailsuComponent } from './detailsu/detailsu.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {path: '', redirectTo:'listingu',pathMatch:'full'},
    {path: 'listingu', component: ListinguComponent, canActivate:[AuthGuard]},
    {path: 'datailsu', component: DetailsuComponent, canActivate:[AuthGuard]},
    {path: 'me', component: MeComponent, canActivate:[AuthGuard]},
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsersRoutingModule { }