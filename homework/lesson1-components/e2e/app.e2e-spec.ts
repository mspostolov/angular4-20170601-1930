import { Lesson1ComponentsPage } from './app.po';

describe('lesson1-components App', () => {
  let page: Lesson1ComponentsPage;

  beforeEach(() => {
    page = new Lesson1ComponentsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
