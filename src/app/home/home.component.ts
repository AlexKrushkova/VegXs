import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Product } from '../store/product.model';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  constructor(
    private storeService: StoreService,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  //* Vars
  product: Product[];
  private userSub: Subscription;
  isAuth = false;

  ngOnInit(): void {
    this.dataStorageService.fetchProduct().subscribe();
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }
  ngOnChanges() {}
  ngDoCheck(): void {
    this.product = this.storeService.getProduct().slice(0, 3);
  }

  // * Functions
  toStore() {
    this.storeService.toStore();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}