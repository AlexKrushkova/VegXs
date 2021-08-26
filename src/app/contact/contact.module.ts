import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRouterModule } from './contact-router.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRouterModule,
    RouterModule,
    ReactiveFormsModule,
  

    AgmCoreModule
    .forRoot({
      apiKey: 'GoogleMapsApiKey',
    }),
  ],


  
})
export class ContactModule {}