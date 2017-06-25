import { Anton.KomratovPage } from './app.po';

describe('anton.komratov App', () => {
  let page: Anton.KomratovPage;

  beforeEach(() => {
    page = new Anton.KomratovPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
