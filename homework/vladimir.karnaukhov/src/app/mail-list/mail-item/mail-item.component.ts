import { EmailsService } from '../../services/emails.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Email } from '../../data/mail';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  @Input() email: Email;
  private creationDate: Date;

  constructor(private emailService: EmailsService) { }

  ngOnInit() {
    this.creationDate = new Date();
  }

  ngOnDestroy() {
    var lifeTime = (<any>new Date() - <any>this.creationDate) / 1000;
    
    console.log(`Email #${this.email.id} lived ${lifeTime} seconds`);
  }

  deleteMail(): void {
    this.emailService.deleteEmail(this.email);
  }
}
