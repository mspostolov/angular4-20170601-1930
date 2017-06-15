import { Homework3Page } from './app.po';

describe('homework3 App', () => {
  let page: Homework3Page;

  beforeEach(() => {
    page = new Homework3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
