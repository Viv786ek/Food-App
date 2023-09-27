import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activateRoute: ActivatedRoute) {
    let foodObservalbe: Observable<Food[]>;
    activateRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodObservalbe = this.foodService.getAllFoodsByTag(params.tag);
      else
        foodObservalbe = foodService.getAll();
      //it could be any name
      foodObservalbe.subscribe((serverFoods) => {
        this.foods = serverFoods;
        })
    })
  }
}
