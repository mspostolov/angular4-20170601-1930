import { Dmitry.RagozinPage } from './app.po';

describe('dmitry.ragozin App', () => {
  let page: Dmitry.RagozinPage;

  beforeEach(() => {
    page = new Dmitry.RagozinPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
