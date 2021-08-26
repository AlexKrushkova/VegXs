import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRouter } from './not-found-router.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRouter, RouterModule],
})
export class NotFoundModule {}