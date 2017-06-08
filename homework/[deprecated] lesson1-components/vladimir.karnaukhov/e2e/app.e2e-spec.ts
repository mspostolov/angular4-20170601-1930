import { Vladimir.KarnaukhovPage } from './app.po';

describe('vladimir.karnaukhov App', () => {
  let page: Vladimir.KarnaukhovPage;

  beforeEach(() => {
    page = new Vladimir.KarnaukhovPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
