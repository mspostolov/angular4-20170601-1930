import { User.ListPage } from './app.po';

describe('user.list App', () => {
  let page: User.ListPage;

  beforeEach(() => {
    page = new User.ListPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
