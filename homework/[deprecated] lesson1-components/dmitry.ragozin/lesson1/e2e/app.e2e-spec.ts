import { Lesson1Page } from './app.po';

describe('lesson1 App', () => {
  let page: Lesson1Page;

  beforeEach(() => {
    page = new Lesson1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
