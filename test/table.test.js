import { expect } from "chai";
import Table from "../src/table";

describe("A true table", function() {
  describe("Given geometric coordinate system", function() {
    it("should have boundaries with x(+) and y(+)", function() {
      let table = new Table(5,5);
      let boundaries = table.Boundaries;

      [boundaries.x1, boundaries.y1, boundaries.x2, boundaries.y2].forEach(value =>
        expect(value).to.be.at.least(0)
      );
    });

    it("should be a positive square", function() {
      let table = new Table(5,5);
      let boundaries = table.Boundaries;

      expect(boundaries.x2).to.be.equal(boundaries.y2);
    });
  });
});
