import { Component, input, signal } from '@angular/core';
import { IRestaurant } from '../../../models/restaurant';
import { RestaurantAddOrderComponent } from '../restaurant-add-order/restaurant-add-order.component';

@Component({
  selector: 'app-restaurant-dishes',
  imports: [RestaurantAddOrderComponent],
  templateUrl: './restaurant-dishes.component.html',
  styleUrl: './restaurant-dishes.component.css',
})
export class RestaurantDishesComponent {
  restaurant = input.required<IRestaurant | null>();
  isShowOrder = signal(false);

  handleShowOrder() {
    this.isShowOrder.set(true);
  }
  handleHideOrder() {
    this.isShowOrder.set(false);
  }
}
