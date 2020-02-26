const expect = require('chai').expect;

const words = 'Word of the day';

describe('Initial Test', function() {
  describe('TypeOf checking', function() {
    it('should return typeof string', function() {
      expect(words)
        .to.be.a('string')
        .and.to.have.lengthOf(15);
    });
  });
});
