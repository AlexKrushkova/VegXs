import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Product } from '../../product.model';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent implements OnInit, OnDestroy {
  constructor(
    private storeService: StoreService,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  //* Vars
  id: number;
  isAuth = false;
  private userSub: Subscription;

  // * Bind the product and id
  @Input('product') product: Product;
  @Input() index: number;

  // ? Fetch auth state
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  // ? Delete
  onDeleteProduct() {
    this.storeService.deleteProduct(this.index);
    this.dataStorageService.storeProduct();
  }

  // ? Load the details page
  onDetails() {
    this.storeService.mode = true;
  }
  // ? Load the edit page
  onEdit() {
    this.storeService.mode = true;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onOrder() {
    alert(`Order placed`);
  }
}