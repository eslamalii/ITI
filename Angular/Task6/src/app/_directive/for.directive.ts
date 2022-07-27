import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]',
})
export class ForDirective {
  @Input() set appFor(v: number) {
    for (let i = 0; i < v; i++) {
      this.vref.createEmbeddedView(this.tref, { index: i });
    }
  }
  constructor(private tref: TemplateRef<any>, private vref: ViewContainerRef) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for (let i = 0; i < this.appFor; i++) {
      this.vref.createEmbeddedView(this.tref, { index: i });
    }
  }
}
