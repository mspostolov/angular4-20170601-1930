import { UserListPage } from './app.po';

describe('user-list App', () => {
  let page: UserListPage;

  beforeEach(() => {
    page = new UserListPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
