import { Component, OnInit, Input } from '@angular/core';

type UserData = {
  firstName: string,
  surname: string,
  secondName: string,
  dateOfBirth: string,
  sex: number
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user;

  public shortName: string;
  public isRenderData: boolean;
  public actionName: string;

  constructor() {
    this.isRenderData = false;
  }

  // получает ФИО с инициалами
  getShortName(data: UserData): string {
    return `${data.surname} ${data.firstName.charAt(0).toUpperCase()}. ${data.secondName.charAt(0).toUpperCase()}.`;
  }

  clickAction(): void {
    this.isRenderData = !this.isRenderData;
    this.actionName = this.getActionName();
  }

  clickTitle(target): void {
    if (target.classList.contains('card__title')) {
      let card: HTMLElement = target.closest('.card') as HTMLElement;
      card.classList.toggle('card-selected');
    }
  }

  getActionName(): string {
    return this.isRenderData ? 'свернуть' : 'развернуть';
  }

  ngOnInit() {
    this.shortName = this.getShortName(this.user);
    this.actionName = this.getActionName();
  }

}
