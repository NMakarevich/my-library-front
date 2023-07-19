import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { DrawerWidthDirective } from './sidenav-drawer/drawer-width.directive';
import { SidenavService } from './sidenav.service';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavDrawerComponent,
    SidenavContentComponent,
    DrawerWidthDirective,
  ],
  imports: [CommonModule],
  exports: [
    SidenavComponent,
    SidenavDrawerComponent,
    SidenavContentComponent,
    DrawerWidthDirective,
  ],
  providers: [SidenavService],
})
export class SidenavModule {}
