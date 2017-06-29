import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
 
})
export class UserDetailsComponent implements OnInit {

  user:User;

  constructor(private route: ActivatedRoute,
  private userService : UserService) { }

  ngOnInit() {
this.route.params.subscribe(params => {
       this.user = this.userService.getUser(+params["id"]);
     });

  }

}
