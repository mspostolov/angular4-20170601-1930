import { Lesson3ServicesPage } from './app.po';

describe('lesson3-services App', () => {
  let page: Lesson3ServicesPage;

  beforeEach(() => {
    page = new Lesson3ServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
