import { Food } from "./Food";

export class CartItem {

  constructor(food:Food) {
    this.food = food;
    this.price; // getter
  }

  food:Food;
  quantity:number = 1;

  get price():number {  //convention is to use lowercase p
    return this.food.price * this.quantity;
  }
}
