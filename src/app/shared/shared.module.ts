import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
