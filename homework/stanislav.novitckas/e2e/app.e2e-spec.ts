import { LessonTwoPage } from './app.po';

describe('lesson-two App', () => {
  let page: LessonTwoPage;

  beforeEach(() => {
    page = new LessonTwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
