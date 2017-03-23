import { WebCotizaAnjoPage } from './app.po';

describe('web-cotiza-anjo App', () => {
  let page: WebCotizaAnjoPage;

  beforeEach(() => {
    page = new WebCotizaAnjoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
