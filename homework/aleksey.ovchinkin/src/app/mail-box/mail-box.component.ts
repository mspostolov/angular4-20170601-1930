import {Component, OnInit} from '@angular/core';

type Letter = {
    title: string,
    date: Date
}

@Component({
    selector: 'app-mail-box',
    templateUrl: './mail-box.component.html',
    styleUrls: ['./mail-box.component.css']
})

export class MailBoxComponent implements OnInit {

    private counter: number; // счетчик количества добавленных писем

    public arrayOfLetters: Letter[]; // массив писем

    constructor() {
    }

    // функция добавления письма
    private addNewLetter(): void {
        let numLetters: number = this.getRandomInt(1, 2);

        for (let i = 0; i < numLetters; i++) {
            this.arrayOfLetters.push({
                title: 'Letter #' + ++this.counter,
                date: new Date(Date.now() - 1000 * 60 * 60 * this.getRandomInt(1, 50))
            });
        }
    }

    // оболочка для callback-функции удаления письма
    public deleteLetter() {
        return (num: number) => {
            this.arrayOfLetters.splice(num, 1);
        }
    }

    // функция автодобавления писем (рекурсивный Timeout)
    private autoAddLetters(): void {
        setTimeout( function add() {
            this.addNewLetter();
            setTimeout( add.bind(this), this.getRandomInt(3000, 5000) )
        }.bind(this), this.getRandomInt(3000, 5000) );
    }

    // функция инициалицации массива писем
    private initMailArray(): void {
        this.arrayOfLetters = [
            {
                title: 'Letter #1',
                date: new Date(Date.now() - 1000 * 60 * 60 * this.getRandomInt(1, 50))
            },
            {
                title: 'Letter #2',
                date: new Date(Date.now() - 1000 * 60 * 60 * this.getRandomInt(1, 50))
            },
            {
                title: 'Letter #3',
                date: new Date(Date.now() - 1000 * 60 * 60 * this.getRandomInt(1, 50))
            },
            {
                title: 'Letter #4',
                date: new Date(Date.now() - 1000 * 60 * 60 * this.getRandomInt(1, 50))
            }
        ];
    }

    // функция получения случайного числа
    private getRandomInt(min, max): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // при инициализации компонента
    ngOnInit() {
        this.counter = 4;
        this.initMailArray();
        this.autoAddLetters();
    }

}
