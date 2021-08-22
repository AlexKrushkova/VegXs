import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private router: Router, private route: ActivatedRoute) {}
  // * Vars
  addProductMode = false;
  loggedIn = false;
  mode = false;
  // detailMode = false;
  // editMode = false;
  private product: Product[] = [];

  // * Fetch the current product stock
  getProduct() {
    if (this.product != null) {
      return this.product;
    } else {
      return (this.product = []);
    }
  }

  // * Add a new product
  addProduct(product: Product) {
    this.product.push(product);
  }

  // * Delete a product
  deleteProduct(index: number) {
    this.product.splice(index, 1);
  }

  // * Get a single product
  singleProduct(index: number) {
    return this.product[index];
  }
  // * Set all products from the database arr to product arr.

  setProduct(product: Product[]) {
    if (this.product !== null) {
      this.product = product;
    } else {
      this.product = [];
    }
  }

  //* Update a product

  updateProduct(index: number, newProduct: Product) {
    this.product[index] = newProduct;
  }

  // ? redirect to store.
  toStore() {
    this.router.navigate(['store'], { relativeTo: this.route });
    this.addProductMode = false;
    this.mode = false;
  }
}