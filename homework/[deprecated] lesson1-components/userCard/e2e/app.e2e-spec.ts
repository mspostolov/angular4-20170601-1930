import { UserCardPage } from './app.po';

describe('user-card App', () => {
  let page: UserCardPage;

  beforeEach(() => {
    page = new UserCardPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
