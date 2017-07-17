import { Directive, ElementRef, Renderer, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[dgAutofocus]'
})
export class AutofocusDirective implements AfterViewChecked {

  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
  }

}
