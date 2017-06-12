import { Aleksey.OvchinkinPage } from './app.po';

describe('aleksey.ovchinkin App', () => {
  let page: Aleksey.OvchinkinPage;

  beforeEach(() => {
    page = new Aleksey.OvchinkinPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
