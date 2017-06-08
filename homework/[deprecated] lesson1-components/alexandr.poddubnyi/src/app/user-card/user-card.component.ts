import {
  Component, EventEmitter, Input,
  Output
} from '@angular/core';
import { User } from 'app/shared/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() user: User;
  @Output() highlightElement = new EventEmitter;

  highlightMe() { this.highlightElement.emit(this.user); }

}