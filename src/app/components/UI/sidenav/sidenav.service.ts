import { Injectable } from '@angular/core';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';

@Injectable()
export class SidenavService {
  drawerOpened = false;

  drawer!: SidenavDrawerComponent;

  content!: SidenavContentComponent;

  get drawerWidth() {
    return this.drawer.width;
  }

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
    this.drawer.isOpened = this.drawerOpened;
    this.content.setContentMargin(this.drawerOpened ? this.drawerWidth : 0);
  }
}
