import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Product } from '../product.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit, OnChanges {
  constructor(
    private storeService: StoreService,
    public dataStorageService: DataStorageService
  ) {}

  // * Fetch all product
  ngOnInit(): void {
    this.dataStorageService.fetchProduct().subscribe();
  }
  ngOnChanges() {
    this.dataStorageService.fetchProduct().subscribe();
  }
  ngDoCheck(): void {
    this.product = this.storeService.getProduct();
  }

  product: Product[];
}