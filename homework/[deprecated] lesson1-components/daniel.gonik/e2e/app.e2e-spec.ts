import { Daniel.GonikPage } from './app.po';

describe('daniel.gonik App', () => {
  let page: Daniel.GonikPage;

  beforeEach(() => {
    page = new Daniel.GonikPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
