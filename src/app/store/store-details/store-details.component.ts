  
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Product } from '../product.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css'],
})
export class StoreDetailsComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.product = this.storeService.singleProduct(this.id);
    });
  }

  //* Vars
  id: number;
  product: Product;

  // * Functions
  toStore() {
    this.storeService.toStore();
  }

  onOrder() {
    alert(`Order placed`);
  }
}