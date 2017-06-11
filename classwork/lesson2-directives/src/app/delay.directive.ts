<<<<<<< HEAD
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
=======
import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad

@Directive({
  selector: '[appDelay]'
})
<<<<<<< HEAD
export class DelayDirective implements Input{

  @Input('appDelay') delay: number;

  constructor(
=======
export class DelayDirective implements OnInit {

  @Input() appDelay : number;

  public constructor(
>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
<<<<<<< HEAD
    }, this.delay * 500);
=======
    }, this.appDelay * 500);

>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad
  }

}
