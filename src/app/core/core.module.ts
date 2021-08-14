import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers:[
    appInterceptorProvider
  ],
  exports: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
