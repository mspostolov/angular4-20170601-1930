import { Lesson2DirectivesPage } from './app.po';

describe('lesson2-directives App', () => {
  let page: Lesson2DirectivesPage;

  beforeEach(() => {
    page = new Lesson2DirectivesPage();
  });

<<<<<<< HEAD
  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
=======
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad
  });
});
