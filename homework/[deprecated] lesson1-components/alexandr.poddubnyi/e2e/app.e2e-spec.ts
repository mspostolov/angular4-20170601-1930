import { HomeWorkPage } from './app.po';

describe('home-work App', () => {
  let page: HomeWorkPage;

  beforeEach(() => {
    page = new HomeWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
