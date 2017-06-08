import { Component } from '@angular/core';
/// <reference path="app.d.ts"" />
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coworkers: Array<Dayoff.Employee>;
  selectedUser: Dayoff.Employee;

  onUserSelected(user: Dayoff.Employee){
    this.selectedUser = user;
  }

  constructor(){
    this.coworkers = [
      {
        name: 'Jerry Castro', 
        photo: 'assets/photos/JerryCastro.jpg',
        profession: 'Manager',
        bio: 'I love strawberries, travel, and photography',
        direction: 'Tourism',
        email: 'john.castri@ggmail.com',
        phone: '501-520-025'
      },
      {
        name: 'Britanny Colleman', 
        photo: 'assets/photos/BritannyColleman.jpg',
        profession: 'CEO',
        bio: 'I love strawberries, travel, and photography',
        direction: 'Tourism',
        email: 'britanny.colleman@ggmail.com',
        phone: '161-577-035'
      },
      {
        name: 'Martyna Grzafa Martyna Grzafa Martyna GrzafaMartyna Grzafa Martyna Grzafa', 
        photo: 'assets/photos/MartynaGrzafa.jpg',
        profession: 'Manager',
        bio: 'I love strawberries, travel, and photography',
        direction: 'Tourism',
        email: 'martyna.grzafa@ggmail.com',
        phone: '101-570-035'
      },
      {
        name: 'Plotr Wawrzychowlak', 
        photo: 'assets/photos/PlotrWawrzychowlak.jpg',
        profession: 'Developer',
        bio: 'I love strawberries, travel, and photography',
        direction: 'Tourism',
        email: 'plotr.wawrzychowlak@ggmail.com',
        phone: '991-125-673'
      }
    ];
  }
}
