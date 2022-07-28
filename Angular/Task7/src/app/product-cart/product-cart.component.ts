import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../_interface/iproduct';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css'],
})
export class ProductCartComponent implements OnInit {
  @Input() products!: Iproduct;
  cartItems: Iproduct[] = [];

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    console.log(this.cartItems);
    this.productservice.getCartItems().subscribe((data) => {
      this.cartItems.push(data);
    });
  }

  deleteItem(item: Iproduct): void {
    const index = this.cartItems.indexOf(item);
    this.cartItems.splice(index,1);
    console.log(this.cartItems);
  }
}
