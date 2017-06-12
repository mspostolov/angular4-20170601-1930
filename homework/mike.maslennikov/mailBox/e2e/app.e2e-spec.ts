import { MailBoxPage } from './app.po';

describe('mail-box App', () => {
  let page: MailBoxPage;

  beforeEach(() => {
    page = new MailBoxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
