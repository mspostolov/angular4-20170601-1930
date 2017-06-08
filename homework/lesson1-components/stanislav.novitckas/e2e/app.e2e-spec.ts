import { Stanislav.NovitckasPage } from './app.po';

describe('stanislav.novitckas App', () => {
  let page: Stanislav.NovitckasPage;

  beforeEach(() => {
    page = new Stanislav.NovitckasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
