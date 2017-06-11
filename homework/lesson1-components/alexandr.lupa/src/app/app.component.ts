import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Users';
  private activeCard: User;

  private users: User[] = [
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      dob: new Date('1976-10-10'),
      sex: 'M',
      address: 'ул. Звенигороская, 47б',
      email: 'ivanov@mail.ru'
    },
    {
      firstName: 'Владимир',
      lastName: 'Романов',
      dob: new Date('1985-03-17'),
      sex: 'M',
      address: 'ул. Тенистая, 12',
      email: 'romanov@gmail.com'
    },
    {
      firstName: 'Вероника',
      lastName: 'Мальцева',
      dob: new Date('1998-11-04'),
      sex: 'F',
      address: 'ул. Партизанов, 34',
      email: 'veroma@gmail.com'
    },
    {
      firstName: 'Александр',
      lastName: 'Выгонский',
      dob: new Date('1992-05-18'),
      sex: 'M',
      address: 'ул. Холодная, 142',
      email: 'vygon@gmail.com'
    }
  ];

  activateCard(card: User): void {
    this.activeCard = this.activeCard === card ? null : card;
  }
}
