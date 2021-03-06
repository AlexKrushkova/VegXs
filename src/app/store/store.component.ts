import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit, OnDestroy {
  // * Vars
  private userSub: Subscription;
  isAuth = false;
  isAdd = false;
  productForm: FormGroup;
  isSubmitted = false;

  // * Imported service
  constructor(
    public storeService: StoreService,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  // * Functions

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });

    this.dataStorageService.fetchProduct().subscribe();

    // * Form data
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      kind: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
      date: new FormControl(Date()),
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.storeService.addProduct(this.productForm.value);
    this.dataStorageService.storeProduct();
    this.storeService.addProductMode = false;
    this.productForm.reset();
    this.dataStorageService.fetchProduct().subscribe((i) => {
      this.ngOnInit();
    });

    this.onCancel();
  }

  //* Redirect to store
  onCancel() {
    this.storeService.toStore();
  }

  //* Unsubscribe
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}