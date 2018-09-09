import { expect } from "chai";

describe("A true robot", function() {
  describe("Given the presence w.r.t geometrical coordinate system", function() {
    it("should have valid position", function() {
      let robot = { position: { x: 0, y: 0, direction: "SOUTH" } };

      expect(robot)
        .to.have.property("position")
        .to.deep.equal({ x: 0, y: 0, direction: "SOUTH" });
    });
  });
});
