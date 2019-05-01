let assert = require('assert');
let { percySnapshot } = require('@percy/webdriverio')

describe('example page', function() {
  it('should look nice', async function () {
    await browser.url('http://localhost:4567/')
    let title = await browser.getTitle();

    assert.equal(title, 'jQuery • TodoMVC');
    await percySnapshot(browser, title);
  });
});
