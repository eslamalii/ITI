import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../_interface/iproduct';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Iproduct[];
  favs: Iproduct[] = [];
  filterText: string = '';

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.products = this.productservice.getAllproducts();
  }

  addFavItem(item: Iproduct) {
    this.favs.push(item);
  }
}
