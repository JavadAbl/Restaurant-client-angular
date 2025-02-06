import { Component, signal } from '@angular/core';
import { RestaurantCardComponent } from './restaurantCards/restaurantCard.component';
import { RestaurantDishesComponent } from './restaurant-dishes/restaurant-dishes.component';
import { IRestaurant } from '../../models/restaurant';
const data = [{ name: 'name1' }, { name: 'name2' }, { name: 'name3' }];

const _restaurants = [
  { name: 'res1', des: 'des1' },
  { name: 'res2', des: 'des2' },
  { name: 'res3', des: 'des3' },
  { name: 'res3', des: 'des3' },
  { name: 'res3', des: 'des3' },
  { name: 'res3', des: 'des3' },
];

@Component({
  selector: 'app-restaurants',
  imports: [RestaurantCardComponent, RestaurantDishesComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
})
export class RestaurantsComponent {
  restaurants = _restaurants;
  selectedRestaurant = signal<IRestaurant | null>(null);

  handleItemClick(val: any) {
    this.selectedRestaurant.set(val);
  }
}
