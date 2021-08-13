// import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { AccessGuard } from './guards/access.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent  
  },
  {
    path: 'about',
    canActivate: [AccessGuard],
    component: AboutComponent,
    data: {
      isLogged: true
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  
  
];

export const AppRoutingModule = RouterModule.forRoot(routes);

