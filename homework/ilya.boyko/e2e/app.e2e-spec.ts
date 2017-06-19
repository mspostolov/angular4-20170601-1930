import { Ilya.BoykoPage } from './app.po';

describe('ilya.boyko App', () => {
  let page: Ilya.BoykoPage;

  beforeEach(() => {
    page = new Ilya.BoykoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
