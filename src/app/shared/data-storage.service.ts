import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from '../store/product.model';
import { StoreService } from '../store/store.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private storeService: StoreService) {}

  storeProduct() {
    const product = this.storeService.getProduct();
    this.http
      .put(
        'https://vegexcess-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        product
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchProduct() {
    return this.http
      .get<Product[]>(
        'https://vegexcess-default-rtdb.europe-west1.firebasedatabase.app/products.json'
      )
      .pipe(
        tap((product) => {
          this.storeService.setProduct(product);
        })
      );
  }
}