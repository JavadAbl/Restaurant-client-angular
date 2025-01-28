import { Component, input } from '@angular/core';
import { IRestaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant-dishes',
  imports: [],
  templateUrl: './restaurant-dishes.component.html',
  styleUrl: './restaurant-dishes.component.css',
})
export class RestaurantDishesComponent {
  restaurant = input.required<IRestaurant | null>();
}
