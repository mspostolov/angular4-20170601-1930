import { NDAPPPage } from './app.po';

describe('nd-app App', () => {
  let page: NDAPPPage;

  beforeEach(() => {
    page = new NDAPPPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
