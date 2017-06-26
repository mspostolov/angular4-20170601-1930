import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Mail } from './mail';
import { MailService } from './mail.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css'],
   providers: [MailService]
})
export class MailListComponent implements OnInit {

mails: Observable<any>;

 constructor(private mailService : MailService,  private router: Router) { }

  ngOnInit() {
    this.mails = this.mailService.getMails();
  }

 

}
