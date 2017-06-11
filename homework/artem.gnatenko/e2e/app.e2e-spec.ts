import { Artem.GnatenkoPage } from './app.po';

describe('artem.gnatenko App', () => {
  let page: Artem.GnatenkoPage;

  beforeEach(() => {
    page = new Artem.GnatenkoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
