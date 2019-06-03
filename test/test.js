const { powOfTwo } = require('../src/utils');

var assert = require('assert');
describe('Utils', function() {
  describe('powOfTwo', function() {
    it('return 4 passing 2 as an argument', function() {
      const res = powOfTwo(2);
      assert.equal(res, 4);
    });
  });
});