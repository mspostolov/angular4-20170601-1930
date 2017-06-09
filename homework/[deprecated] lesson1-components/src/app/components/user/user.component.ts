import { Component, Input } from '@angular/core';
import { User } from 'app/models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Input() user: User;
    isSelected = false;

    onClick(): void {
        this.isSelected = !this.isSelected;
    }
}
