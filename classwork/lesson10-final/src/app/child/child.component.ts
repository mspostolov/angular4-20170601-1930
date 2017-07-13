import { Component, ViewChildren, OnInit, ViewChild, QueryList, AfterViewInit } from '@angular/core';
import { GrandchildComponent } from './grandchild/grandchild.component'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterViewInit {

  //@ViewChild('mydiv') mydiv;
  @ViewChildren(GrandchildComponent) grandchildren: QueryList<GrandchildComponent>;
  //@ContentChild('xxx') xxx;
  //@ConotentChildren

  constructor() { }

  ngAfterViewInit() {
    this.grandchildren.toArray()[0].dosomething();
  }

}


//View
//Content
