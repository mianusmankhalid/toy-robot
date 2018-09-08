import { expect } from 'chai';

describe("simple test", function() {
  describe("which is always true", function() {
    it("should return true", function() {
      let veryTrue = true;
      expect(veryTrue).to.be.equal(true);
    });
  });
});
