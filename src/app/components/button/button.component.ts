import { Component, input } from '@angular/core';

@Component({
  selector: 'button[app-btn]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  test = input<any>();
}
