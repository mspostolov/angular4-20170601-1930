import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from 'app/services/data.service';
import { Email } from 'app/models/email';

@Component({
    selector: 'app-mail-details',
    templateUrl: './mail-details.component.html',
    styleUrls: ['./mail-details.component.css'],
    providers: [ DataService ]
})
export class MailDetailsComponent implements OnInit, OnDestroy {
    private emailId: number;
    private email: Email;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.emailId = +params['id'];
            this.email = this.dataService.getEmail(this.emailId);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
