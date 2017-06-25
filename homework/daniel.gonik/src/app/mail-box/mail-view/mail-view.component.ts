import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck'

import { MailBoxService } from '../mail-box.service';

@Component({
  selector: 'dg-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit {

  public email;
  public author;

  constructor(
    private route: ActivatedRoute,
    private mailBoxService: MailBoxService
  ) { }

  ngOnInit() {
    this.route.data.pluck('email').subscribe(email => {
      this.email = email;
    });

    this.route.queryParams.pluck('author').subscribe(authorId => {
      this.mailBoxService.getAuthorById(authorId)
        .subscribe(author => this.author = author);
    });
  }

}
