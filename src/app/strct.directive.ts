import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStrct]'
})
export class StrctDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appStrct(predicate: boolean) {
    if (predicate) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
