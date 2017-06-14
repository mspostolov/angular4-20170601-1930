import { Lesson2Page } from './app.po';

describe('lesson2 App', () => {
  let page: Lesson2Page;

  beforeEach(() => {
    page = new Lesson2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
