import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/dto/IProduct';
import { ICartProduct } from 'src/app/dto/ICartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() cartProduct?: ICartProduct[];
  @Output() clearCart = new EventEmitter<ICartProduct[]>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  clearCard() {
    this.cartService.clear();
    this.clearCart.emit([]);
  }
}
