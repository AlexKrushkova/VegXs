import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  isHighlighted = false;
  counter = 0;

  intervalSubscription: Subscription;

  constructor() { 
    interval(1000).subscribe(()=> {
      this.counter++;
    });
  }

  ngOnDestroy(): void {
  this.intervalSubscription.unsubscribe();
  }

  toggleHighlightHandler(){
    this.isHighlighted = !this.isHighlighted;
  }
}
