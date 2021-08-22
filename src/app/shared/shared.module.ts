import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './highlight.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [

    HighlightDirective,

    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective
  ]
})
export class SharedModule { }
