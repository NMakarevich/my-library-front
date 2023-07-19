import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ui-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent {
  width!: number;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  set drawerWidth(value: number) {
    this.width = value;
  }

  setContentMargin(value: number) {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'margin-left',
      `${value}px`
    );
  }
}
