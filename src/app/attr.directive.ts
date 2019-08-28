import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  HostBinding,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective implements OnChanges {
  constructor() {}
  @Input() appAttr;
  @Input() dirProp1;
  @Input() dirProp2;

  @Output() dirEvent = new EventEmitter();

  @HostBinding('className') css;

  ngOnChanges(changes: SimpleChanges): void {
    this.css = this.appAttr;
    console.log('Prop1', this.dirProp1);
    console.log('Prop2', this.dirProp2);

    console.log('Directive Event is being emitted');
    this.dirEvent.emit('Directive event emitted');
  }
}
