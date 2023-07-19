import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerButtonComponent } from './burger-button.component';

@NgModule({
  declarations: [BurgerButtonComponent],
  exports: [BurgerButtonComponent],
  imports: [CommonModule],
})
export class BurgerButtonModule {}
