import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproduct } from '../_interface/iproduct';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private productservice: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required),
  });

  get title() {
    return this.form.get('title') as FormControl;
  }

  get description() {
    return this.form.get('description') as FormControl;
  }

  get price() {
    return this.form.get('price') as FormControl;
  }

  get imgUrl() {
    return this.form.get('imgUrl') as FormControl;
  }

  addUser(user: any) {
    this.productservice.addProduct(user);
  }
}
