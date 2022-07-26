import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]',
})
export class ForDirective {
  @Input() appFor: number = 0;
  constructor(private tref: TemplateRef<any>, private vref: ViewContainerRef) {}

  ngOnInit(): void {
    for (let i = 0; i < this.appFor; i++) {
      this.vref.createEmbeddedView(this.tref, { index: i });
    }
  }
}
