import { IProduct } from './../../dto/IProduct';
import { Component, OnInit } from '@angular/core';
import { MallService } from 'src/app/services/mall.service';
import { ICartProduct } from 'src/app/dto/ICartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mall',
  templateUrl: './mall.component.html',
  styleUrls: ['./mall.component.scss'],
})
export class MallComponent implements OnInit {
  constructor(
    private mallService: MallService,
    private cartService: CartService
  ) {}

  products: IProduct[] = [];
  cartProduct: ICartProduct[] = [];

  ngOnInit(): void {
    this.mallService.getProducts().subscribe((t) => this.products.push(...t));
    this.cartService.getCartProducts().subscribe((t) => this.cartProduct.push(...t));
  }

  setCart(cartProduct: ICartProduct[]) {
    this.cartProduct = cartProduct;
  }
}
