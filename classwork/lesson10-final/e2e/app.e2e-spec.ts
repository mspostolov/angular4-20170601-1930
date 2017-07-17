import { Lesson10FinalPage } from './app.po';

describe('lesson10-final App', () => {
  let page: Lesson10FinalPage;

  beforeEach(() => {
    page = new Lesson10FinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
