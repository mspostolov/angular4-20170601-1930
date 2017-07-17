import { Lesson9PerformancePage } from './app.po';

describe('lesson9-performance App', () => {
  let page: Lesson9PerformancePage;

  beforeEach(() => {
    page = new Lesson9PerformancePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
