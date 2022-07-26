import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../_interface/iproduct';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css'],
})
export class FavoriteProductComponent implements OnInit {
  @Input() favItems!: Iproduct;

  constructor() {}

  ngOnInit(): void {}
}
