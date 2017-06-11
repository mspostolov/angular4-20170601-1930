import { Lesson2DirectivesPage } from './app.po';

describe('lesson2-directives App', () => {
  let page: Lesson2DirectivesPage;

  beforeEach(() => {
    page = new Lesson2DirectivesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
