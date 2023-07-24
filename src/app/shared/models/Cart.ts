import { CartItem } from "./CartItem";

export class Cart {
  //List of cart items
  items:CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    //loop through items and get total price
    this.items.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
}
