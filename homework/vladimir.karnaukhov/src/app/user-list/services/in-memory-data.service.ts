import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../../data/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] =
      [
        { id: 1, firstName: "Александр", surname: "Поддубный", country: "ua" },
        { id: 2, firstName: "Владимир", surname: "Карнаухов", country: "ru" },
        { id: 3, firstName: "Даниил", surname: "Гоник", photo: "http://i.imgur.com/ITqekuU.jpg", country: "ru" },
        { id: 4, firstName: "Александр", surname: "Лупа", photo: "http://i.imgur.com/wGViT64.png", country: "ua" },
        { id: 5, firstName: "Максим", surname: "Постолов", photo: "http://i.imgur.com/SErwJfQ.jpg", country: "ru" },
        { id: 6, firstName: "Alexander", surname: "Ivankoff", photo: "http://i.imgur.com/uGgV9BP.jpg", country: "ru" },
        { id: 7, firstName: "Natallia", surname: "Gorbunova", country: "by" },
        { id: 8, firstName: "Алексей", surname: "Овчинкин", photo: "http://i.imgur.com/yn1HI2Q.jpg", country: "ru" },
        { id: 9, firstName: "Александр", surname: "Бондаренко", photo: "http://i.imgur.com/YxDFITe.jpg", country: "ua" },
        { id: 10, firstName: "Александр", surname: "Горелов", country: "ru" },
        { id: 11, firstName: "Eduard", surname: "Skripchenko", photo: "http://i.imgur.com/Mr0TRyd.jpg", country: "ua" },
        { id: 12, firstName: "Саша", surname: "Мартищенко", photo: "http://i.imgur.com/kyy9GPE.jpg", country: "ua" },
        { id: 13, firstName: "Дмитрий", surname: "Рагозин", photo: "http://i.imgur.com/WeyyNG7.jpg", country: "ru" },
        { id: 14, firstName: "Anton", surname: "Komratov", country: "ru" },
        { id: 15, firstName: "Артём", surname: "Гнатенко", photo: "http://i.imgur.com/AI3OIVN.jpg", country: "ua" },
        { id: 16, firstName: "Никита", surname: "Дырдин", country: "ru" },
        { id: 17, firstName: "Стас", surname: "Новицкас", photo: "http://i.imgur.com/EpNoFyW.png", country: "ru" },
        { id: 18, firstName: "Александр", surname: "Чрубаков", photo: "http://i.imgur.com/mlzMmXu.jpg", country: "ru" },
        { id: 19, firstName: "Илья", surname: "Бойко", photo: "http://i.imgur.com/0U077Nh.jpg", country: "ru" },
        { id: 20, firstName: "Ольга", surname: "Гусева", photo: "http://i.imgur.com/LXXi7Co.jpg", country: "ru" },
        { id: 21, firstName: "Миша", surname: "Масленников", country: "ru" },
        { id: 22, firstName: "Irina", surname: "Petrova", photo: "http://i.imgur.com/88rrWI3.jpg", country: "il" }];

    return {users};
  }
}
