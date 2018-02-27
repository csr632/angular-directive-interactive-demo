import {
  Component, OnInit, ViewChild, AfterViewInit, ViewContainerRef,
  Output, EventEmitter, HostBinding, Input
} from '@angular/core';

@Component({
  selector: 'b-comp',
  templateUrl: 'b.component.html',
  inputs: ['id: account-id']
})

export class BComponent {
  name = 'BComponent';
  id;
  constructor() { }
}