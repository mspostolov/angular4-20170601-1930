import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public users: [{}] = [
    {name: 'Стас Новицкас', date: '13.11.1991', sex: 'мужской', address: 'Невский пр. 1', email: 'novitckas@gmail.com'},
    {name: 'Пётр Васильев', date: '10.09.1989', sex: 'мужской', address: 'Московский пр. 12', email: 'petrvasilev@gmail.com'},
    {name: 'Марина Мухина', date: '01.01.1979', sex: 'женский', address: 'Тихая ул. 33', email: 'mmuhina@ya.ru'},
  ]
}
