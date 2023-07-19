import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input()
  icon!: string;

  @Input()
  title!: string;
}
