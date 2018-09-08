import { expect } from "chai";

describe("A true table", function() {
  describe("Given geometric coordinate system", function() {
    it("should have boundaries with x(+) and y(+)", function() {
      let table = { x1: 0, x2: 10, y1: 0, y2: 10 };

      [table.x1, table.y1, table.x2, table.y2].forEach(value =>
        expect(value).to.be.at.least(0)
      );
    });

    it("should be a positive square", function() {
      let table = { x1: 0, x2: 10, y1: 0, y2: 10 };

      expect(table.x2).to.be.equal(table.y2);
    });
  });
});
