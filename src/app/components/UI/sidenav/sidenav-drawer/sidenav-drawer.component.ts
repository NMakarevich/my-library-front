import { Component, ElementRef, HostBinding } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'ui-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: ['./sidenav-drawer.component.scss'],
})
export class SidenavDrawerComponent {
  @HostBinding('class.sidenav-drawer-opened') isOpened =
    this.sidenavService.drawerOpened;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private readonly sidenavService: SidenavService
  ) {}

  get width() {
    return this.elementRef.nativeElement.offsetWidth || 0;
  }
}
