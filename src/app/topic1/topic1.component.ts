import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.css']
})
export class Topic1Component implements OnInit {
  cssString = 'text-success';
  prop1 = 'This is prop1';
  prop2 = 100;
  @Input() dirProp1;

  constructor() {}

  ngOnInit() {
    // Check this when both directive and components declare the same input properties
    // console.log('OnInitComp', this.dirProp1);
  }

  handler(val) {
    console.log('Handler in Component', val);
  }
}
