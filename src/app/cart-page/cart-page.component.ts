import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;

  constructor(private cartService:CartService) {
    this.setCart();
  }

  ngOnInit(): void {

  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    //refresh the cart, set new value for it to be refreshed
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string) {
    //parse quantity string to integer
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
