import { Lesson6FormsPage } from './app.po';

describe('lesson6-forms App', () => {
  let page: Lesson6FormsPage;

  beforeEach(() => {
    page = new Lesson6FormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
