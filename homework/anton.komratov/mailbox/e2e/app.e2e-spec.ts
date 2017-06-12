import { MailboxPage } from './app.po';

describe('mailbox App', () => {
  let page: MailboxPage;

  beforeEach(() => {
    page = new MailboxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
