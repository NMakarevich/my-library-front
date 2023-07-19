import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiDrawerWidth]',
})
export class DrawerWidthDirective implements OnInit {
  @Input()
  uiDrawerWidth!: string;

  constructor(
    private readonly renderer2: Renderer2,
    private readonly element: ElementRef
  ) {}

  ngOnInit() {
    this.renderer2.setStyle(
      this.element.nativeElement,
      'width',
      this.uiDrawerWidth
    );
  }
}
