import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRouterModule } from './contact-router.module';
import { GoogleMapsModule } from '@angular/google-maps'

// import { AgmCoreModule, AgmMap, AgmMarker } from '@agm/core';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRouterModule,
    RouterModule,
    ReactiveFormsModule,
    GoogleMapsModule 
  

    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAE9rXfgetaO5WLhJeayPb3FGdZp848Aec',
    // }),
  ],

  
//   schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class ContactModule {}