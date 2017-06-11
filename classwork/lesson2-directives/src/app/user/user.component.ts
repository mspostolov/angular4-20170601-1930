<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
<<<<<<< HEAD
export class UserComponent implements OnInit {
=======
export class UserComponent implements OnInit, OnDestroy {
>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
=======
    //...
  }

  ngOnDestroy() {
    //...
>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad
  }

}
