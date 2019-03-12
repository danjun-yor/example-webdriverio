var assert = require('assert');

describe('example page', function() {
  it('should look nice', function () {
    browser.url('http://localhost:8000/')
    $('#new-todo').waitForExist(5000);
    // browser.percySnapshot('sample');
    assert.equal(browser.getTitle(), 'jQuery • TodoMVC');
  });
});
