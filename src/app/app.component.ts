import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RestaurantCardComponent } from './restaurantCards/restaurantCard.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RestaurantCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-angular';
}
