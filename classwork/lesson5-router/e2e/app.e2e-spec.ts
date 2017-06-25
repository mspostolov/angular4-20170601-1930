import { Lesson5RouterPage } from './app.po';

describe('lesson5-router App', () => {
  let page: Lesson5RouterPage;

  beforeEach(() => {
    page = new Lesson5RouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
