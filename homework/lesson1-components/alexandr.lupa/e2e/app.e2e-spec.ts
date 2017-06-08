import { Alexandr.LupaPage } from './app.po';

describe('alexandr.lupa App', () => {
  let page: Alexandr.LupaPage;

  beforeEach(() => {
    page = new Alexandr.LupaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
