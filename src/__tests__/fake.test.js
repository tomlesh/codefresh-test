const { powOfTwo } = require('../utils');

describe('fake tests', function() {
  it('1', function() {
    expect(false).toBe(false);  
  });
  it('2', function() {
    expect(true).toBe(true);  
  });
  it('3', function() {
    expect(false).toBe(false);  
  });
})

describe('utils tests', function() {
  it('powOfTwo 1`st case', function() {
    const res = powOfTwo(12);
    expect(res).toBe(144);
  });
  it('powOfTwo 2`nd case', function() {
    const res = powOfTwo(-2);
    expect(res).toBe(4);
  });
  it('powOfTwo 3`rd case', function() {
    const res = powOfTwo(0);
    expect(res).toBe(0);
  });
})