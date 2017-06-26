import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/users-routing/shared/data.service';

@Component({
  selector: 'emails',
  templateUrl: './emails.component.html'
})
export class EmailsComponent implements OnInit {
  emails: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.emails = this.dataService.getEmails();
    // this.dataService.getEmails().subscribe((res) => this.emails = res);
  }
}
