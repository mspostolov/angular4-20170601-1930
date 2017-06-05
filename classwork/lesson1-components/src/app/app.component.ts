import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public title: string = 'app works!!!';
  title2 = 'app works???';
  activeClassName = 'active';
  isActive = false;
  myColor = 'green';
  user = {
    name: 'John',
    age: 50
  }

  constructor() {
    setTimeout(() => {
      this.isActive = true;
    }, 3000);
  }

  dosomething(text) {
     alert(text);
     this.isActive = !this.isActive;
  }

  enterme(text) {
      console.log(text);
  }

  changeColor(color){
    this.myColor = color;
  }


}

/*
 - {{}}
 - []
 - #
 - nested components
 - passing data into component
 - directives
  - components
  - attribute directive
  - structural directives
 - directives out of Box
  - *ngIf
  - *ngFor
*/