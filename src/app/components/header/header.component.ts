import { Component, Input } from '@angular/core';
import { SidenavService } from '../UI/sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title!: string;

  constructor(private readonly sidenavService: SidenavService) {}

  toggleDrawer() {
    this.sidenavService.toggleDrawer();
  }
}
