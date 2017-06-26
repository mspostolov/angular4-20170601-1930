import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dg-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public routeLinks: any[];
  constructor() {
    this.routeLinks = [
      { label: 'Login', link: '/auth/login' },
      { label: 'Register', link: '/auth/register' }
    ];
  }

  ngOnInit() {
  }

}
