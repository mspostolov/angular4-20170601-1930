import { Component } from '@angular/core';

type UserData = {
  firstName: string,
  surname: string,
  secondName: string,
  dateOfBirth: string,
  sex: number
};

type DataList = UserData[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public users: DataList = [
    {
      firstName: 'Иван',
      surname: 'Иванов',
      secondName: 'Иванович',
      dateOfBirth: '01 янв. 1987г.',
      sex: 1
    },
    {
      firstName: 'Полина',
      surname: 'Иванова',
      secondName: 'Михайловна',
      dateOfBirth: '31 янв. 1989г.',
      sex: 0
    },
    {
      firstName: 'Петр',
      surname: 'Петров',
      secondName: 'Иванович',
      dateOfBirth: '21 фев. 1977г.',
      sex: 1
    },
    {
      firstName: 'Инна',
      surname: 'Петрова',
      secondName: 'Васильевна',
      dateOfBirth: '21 дек. 1985г.',
      sex: 0
    }
  ];
}















