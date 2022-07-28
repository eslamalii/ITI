import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../_interface/iproduct';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('productData') product?: Iproduct;
  @Output() favEvent = new EventEmitter<Iproduct>();

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {}

  setProductToCart(item: Iproduct) {
    this.productservice.setCartItem(item);
  }

  addFavItem(item: Iproduct) {
    this.favEvent.emit(item);
  }
}
