import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public loginPage: boolean = false;
  title = 'app';
  constructor(public router: Router){}
  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ngDoCheck', this.router.url);
    this.loginPage = this.router.url === '/login';
  }
}
