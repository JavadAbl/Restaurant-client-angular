import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';

@Component({
  selector: 'app-index',
  imports: [HeaderComponent, RestaurantsComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {}
