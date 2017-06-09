import { Maksim.PostolovPage } from './app.po';

describe('maksim.postolov App', () => {
  let page: Maksim.PostolovPage;

  beforeEach(() => {
    page = new Maksim.PostolovPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
