// import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: ListComponent
  },
  // {
  //   path: 'user-detail',
  //   // redirectTo: 'user-list'
  //   component: UserDetailComponent,
  //   canActivate: [ParamsActivate],
  //   data: {
  //     paramsActivate: ['id'],
  //     paramsActivateRedirectUrl: '/user-list'
  //   }
  // },
  {
    path: 'user-detail/:id',
    component: DetailComponent,
    data: {
      paramsActivate: ['id'],
      paramsActivateRedirectUrl: '/user-list'
    }
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);