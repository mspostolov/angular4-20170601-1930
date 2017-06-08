import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [{
    name: 'Тест',
    birthdate: '01.02.2015',
    sex: 'мужской',
    address: '400102 г. Волгоград',
    email: 'test@test.test',
    chosen: false
  }, {
    name: 'Test',
    birthdate: '02.05.1995',
    sex: 'женский',
    address: '400102 г. Волгоград',
    email: 'test@test.test',
    chosen: false
  }]
}
