import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../_interface/iproduct';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product-ditl',
  templateUrl: './product-ditl.component.html',
  styleUrls: ['./product-ditl.component.css'],
})
export class ProductDitlComponent implements OnInit {
  productData?: Iproduct;

  constructor(
    private productService: ProductService,
    private arout: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.arout.params.subscribe((pram) => {
      console.log(pram);

      this.productData = this.productService.getProductById(pram['id']);
    });
  }

  goback() {
    this.location.back();
  }
}
