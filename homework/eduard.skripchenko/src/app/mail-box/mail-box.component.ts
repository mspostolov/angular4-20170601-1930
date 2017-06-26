import { Component, OnInit } from '@angular/core';

import { DataService } from 'app/services/data.service';
import { Email } from 'app/models/email';

@Component({
    selector: 'app-mail-box',
    templateUrl: './mail-box.component.html',
    styleUrls: ['./mail-box.component.css'],
    providers: [ DataService ]
})
export class MailBoxComponent implements OnInit {
    public emails: Array<Email>;

    constructor(private dataService: DataService) {
        this.emails = this.dataService.getEmails();
    }

    ngOnInit() {
    }

}
