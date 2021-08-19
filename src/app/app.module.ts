import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AccessGuard }from './guards/access.guard';
import {AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    HttpClientModule, 
    UserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'VegExcess'),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    AccessGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
