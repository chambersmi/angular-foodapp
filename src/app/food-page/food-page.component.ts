import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})

export class FoodPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
    private foodService:FoodService, private cartService:CartService,
    private router:Router) {

    activatedRoute.params.subscribe((params) => {
      if(params["id"]) {
        this.food = foodService.getFoodById(params["id"]);
      }
    })
  }

  food!: Food;

  ngOnInit(): void { }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
