import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
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
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
