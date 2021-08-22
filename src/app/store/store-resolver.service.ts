import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Product } from './product.model';
import { StoreService } from './store.service';

@Injectable({ providedIn: 'root' })
export class StoreResolverService implements Resolve<Product[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private storeService: StoreService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const product = this.storeService.getProduct();

    if (product.length === 0) {
      return this.dataStorageService.fetchProduct();
    } else {
      return product;
    }
  }
}