import { Mike.MaslennikovPage } from './app.po';

describe('mike.maslennikov App', () => {
  let page: Mike.MaslennikovPage;

  beforeEach(() => {
    page = new Mike.MaslennikovPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
