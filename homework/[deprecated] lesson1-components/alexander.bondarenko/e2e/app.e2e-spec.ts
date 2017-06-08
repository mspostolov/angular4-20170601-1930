import { Alexander.BondarenkoPage } from './app.po';

describe('alexander.bondarenko App', () => {
  let page: Alexander.BondarenkoPage;

  beforeEach(() => {
    page = new Alexander.BondarenkoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
