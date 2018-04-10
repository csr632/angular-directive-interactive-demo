import {
  Component, OnInit, ViewChild, AfterViewInit, ViewContainerRef,
  Output, EventEmitter, HostBinding, Input
} from '@angular/core';

@Component({
  selector: 'b-comp',
  templateUrl: 'b.component.html',
})

export class BComponent implements OnInit {
  name = 'BComponent';
  @Output() opt1 = new EventEmitter();
  @Output() opt2 = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.opt1.emit('optValue~');
      this.opt2.emit('optValue222~');
    }, 2000);
  }
}