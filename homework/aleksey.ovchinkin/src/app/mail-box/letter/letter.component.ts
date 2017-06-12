import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit, OnDestroy {

  @Input() letter;
  @Input() count;
  @Input() deleteComponent; // переданный callback

  private start: number; // начало отсчета "рождения" компонента

  constructor() { }

  // обработчик удаления письма
  public deleteItem(num: number): void {
    this.deleteComponent(num);
  }

  // при инициализации компонента
  ngOnInit() {
    this.start = Date.now();
  }

  // при уничтожении компонента
  ngOnDestroy() {
    alert(Math.floor((Date.now() - this.start) / 1000) + ' second(s)');
  }

}
