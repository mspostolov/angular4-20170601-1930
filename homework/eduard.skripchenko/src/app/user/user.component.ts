import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from 'app/services/data.service';
import { User } from 'app/models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [ DataService ]
})
export class UserComponent implements OnInit, OnDestroy {
    private userId: number;
    private user: User;
    private subscription: Subscription;

    onSubmit(): void {
        alert('Submit!');
    }

    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.userId = +params['id'];
            this.user = this.dataService.getUser(this.userId);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
