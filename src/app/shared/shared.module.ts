import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio' 



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatRadioModule
    
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
