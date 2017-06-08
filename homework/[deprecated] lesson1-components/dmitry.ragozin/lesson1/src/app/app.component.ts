import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Карточка товара';
  users = [{
    name: "Ivan",
    surname: "Petrov",
    birthday: "1996-10-10",
    gender: "M",
    address: "ул. Ленина, 47б",
    //email: "van@mail.ru"
  },{
    name: "Владимир",
    surname: "Виноградов",
    //birthday: "1990-01-10",
    gender: "M",
    address: "ул. Герцена, 47б",
    email: "vlad@mail.ru"
  },{
    name: "Евгения",
    surname: "Иванова",
    birthday: "1988-10-10",
    //gender: "W",
    address: "ул. Пруцкова, 47б",
    email: "eu@mail.ru"
  },{
    name: "Жанна",
    surname: "Пурлова",
    birthday: "1933-01-10",
    gender: "W",
    //address: "ул. Новый арбат, 47б",
    email: "zha@mail.ru"
  }]
}
