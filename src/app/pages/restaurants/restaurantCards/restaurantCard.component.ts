import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-restaurantCard',
  templateUrl: './restaurantCard.component.html',
  styleUrls: ['./restaurantCard.component.css'],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RestaurantCardComponent {
  @Input('restaurant') restaurant!: any;
}
