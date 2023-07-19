import { AfterViewInit, Component, ContentChild } from '@angular/core';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'ui-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit {
  @ContentChild(SidenavDrawerComponent) drawer!: SidenavDrawerComponent;

  @ContentChild(SidenavContentComponent) content!: SidenavContentComponent;

  constructor(private readonly sidenavService: SidenavService) {}

  ngAfterViewInit() {
    this.sidenavService.drawer = this.drawer;
    this.sidenavService.content = this.content;
  }
}
