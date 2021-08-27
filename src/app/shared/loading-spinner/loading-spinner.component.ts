import {Component, AfterViewInit, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

/**
 * @title Spinner
 */
@Component({
  selector: 'progress-spinner-configurable-example',
  templateUrl: 'loading-spinner.component.html',
  styleUrls: ['loading-spinner.component.css'],
})

export class LoadingSpinnerComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
