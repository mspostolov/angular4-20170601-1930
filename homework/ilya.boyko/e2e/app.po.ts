import { browser, by, element } from 'protractor';

export class Ilya.BoykoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
