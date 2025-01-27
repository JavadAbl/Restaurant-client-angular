import { Component } from '@angular/core';
import { RestaurantCardComponent } from '../../components/restaurantCards/restaurantCard.component';
const data = [{ name: 'name1' }, { name: 'name2' }, { name: 'name3' }];
@Component({
  selector: 'app-restaurants',
  imports: [RestaurantCardComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
})
export class RestaurantsComponent {
  data = { name: 'sdasd' };
}
