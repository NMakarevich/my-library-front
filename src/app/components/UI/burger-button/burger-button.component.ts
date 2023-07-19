import { Component } from '@angular/core';

@Component({
  selector: 'ui-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
})
export class BurgerButtonComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
