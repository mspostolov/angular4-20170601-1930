export class User 
{
   id: number;
   name: string;
   lastName: string;
  email: string;

}

export let initialUsers: User[] = [
  {
    id: 1,
    name: 'Иван',
   lastName: 'Петров', 
   email: 'petrov@mail.ru'
  },
   {
    id: 2,
    name: 'Петр',
   lastName: 'Иванов'
   , 
   email: 'ivanov@mail.ru'
  },
   {
    id: 3,
    name: 'Сидор',
   lastName: 'Федоров'
   , 
   email: 'fedorov@mail.ru'
  },
 
];