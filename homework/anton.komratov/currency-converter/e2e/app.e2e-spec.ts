import { CurrencyConverterPage } from './app.po';

describe('currency-converter App', () => {
  let page: CurrencyConverterPage;

  beforeEach(() => {
    page = new CurrencyConverterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
