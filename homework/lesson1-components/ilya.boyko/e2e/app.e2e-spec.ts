import { Hw1Page } from './app.po';

describe('hw1 App', () => {
  let page: Hw1Page;

  beforeEach(() => {
    page = new Hw1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
