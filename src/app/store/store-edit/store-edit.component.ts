import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Product } from '../product.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css'],
})
export class StoreEditComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  // * Vars
  editProductForm: FormGroup;
  product: Product;
  isSubmitted = false;
  editMode = false;
  id: number;
  notAllowed = false;

  // ? Prep form before use
  private InitForm() {
    let name = '';
    let price = 0;
    let description = '';
    let kind = '';
    let imagePath = '';
    let weight = 0;

    const product = this.storeService.singleProduct(this.id);

    name = product.name;
    price = product.price;
    description = product.description;
    kind = product.kind;
    imagePath = product.imagePath;
    weight = product.weight;

    // * Form data
    this.editProductForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      price: new FormControl(price, Validators.required),
      description: new FormControl(description, Validators.required),
      kind: new FormControl(kind, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      weight: new FormControl(weight, Validators.required),
      date: new FormControl(product.date),
    });
  }

  // * Methods
  ngOnInit(): void {
    this.dataStorageService.fetchProduct().subscribe();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.InitForm();
    });
  }

  onSubmit() {
    this.storeService.updateProduct(this.id, this.editProductForm.value);
    this.dataStorageService.storeProduct();
    this.dataStorageService.fetchProduct().subscribe((res) => {
      this.ngOnInit();
    });
    this.storeService.mode = false;
    this.onCancel();
  }

  onCancel() {
    this.storeService.toStore();
  }
}