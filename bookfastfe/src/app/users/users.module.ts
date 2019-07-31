import { NgModule } from '@angular/core';
import { DetailsuComponent } from './detailsu/detailsu.component';
import { MeComponent } from './me/me.component';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListinguComponent } from './listingu/listingu.component';
import { UserService } from '../services/user.service';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    declarations: [
      DetailsuComponent,
      ListinguComponent,
      MeComponent
    ],
    imports: [
      UsersRoutingModule,
      HttpClientModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialDesignModule,
      Ng2SmartTableModule
    ],
    providers: [UserService],
    bootstrap: [ListinguComponent]
  })
  export class UsersModule { }