import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Mail } from '../mail';
import { MailService } from '../mail.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.css'],
   providers: [MailService]
})
export class MailDetailsComponent implements OnInit {

mail:Mail;

  constructor( private route: ActivatedRoute,
  private mailService : MailService) { }

  ngOnInit() {

this.route.params.subscribe(params => {
       this.mail = this.mailService.getMail(+params["id"]);
});


  }

}
