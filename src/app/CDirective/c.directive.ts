import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cdirective]',
  inputs: ['name: english-name']
})
export class CDirective {
  set name(val: string) {
    this.host.nativeElement.textContent = 'CDirective\'s name is: ' + val;
  }
  constructor(private host: ElementRef) { }
}