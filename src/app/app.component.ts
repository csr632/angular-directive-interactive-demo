import {
  Component, OnInit, ViewChild, ElementRef,
  AfterViewInit, TemplateRef, ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor() {
  }
  log(val) {
    console.log('log:', val);
  }
}
