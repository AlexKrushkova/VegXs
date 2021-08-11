import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListComponent, DetailComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserModule { }
