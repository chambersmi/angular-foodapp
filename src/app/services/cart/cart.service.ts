import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  constructor() { }

  addToCart(food:Food):void {
    // for each item inside items if this expression (item.food.id === food.id) is true, return that item
    // this increases the quantity rather than creating duplicate foods
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    //if this cartItem is not null
    if(cartItem) {
      //increase the quantity of the food
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return; // if returns, stops function
    }
    //if food is not found, create a new food in cart
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number):void {
    this.cart.items =
    this.cart.items.filter(item=>item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number) {
    //find cart item based on id and change quantity
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    //if null or empty
    if(!cartItem) {
      return;
    }
    cartItem.quantity = quantity;
  }

  //Encapsulating cart
  getCart():Cart {
    return this.cart;
  }
}
