import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant-add-order',
  imports: [FormsModule],
  templateUrl: './restaurant-add-order.component.html',
  styleUrl: './restaurant-add-order.component.css',
})
export class RestaurantAddOrderComponent {
  isShow = input.required<boolean>();
  onExit = output<boolean>();
  title = signal('');
  order = signal('');
  date = new Date();

  test() {
    console.log(this.title);
  }
}
