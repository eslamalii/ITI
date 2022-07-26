import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColors]',
})
export class ColorsDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.background('lightgreen');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background('');
  }

  private background(color: string) {
    this.element.nativeElement.style.background = color;
  }
}
