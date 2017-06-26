import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/users-routing/shared/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  isLoggedIn = this.dataService.isLoggedIn;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  login() {
    this.isLoggedIn = this.dataService.toggleLoginState();

    if (this.isLoggedIn) {
      const redirectUrl = this.dataService.redirectUrl ? this.dataService.redirectUrl : '../users';
      this.router.navigate([redirectUrl], { relativeTo: this.activatedRoute });
    }
  }
}
