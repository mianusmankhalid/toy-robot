import { expect } from "chai";
import Robot from "../src/robot";

describe("A true robot", function() {
  describe("Given the presence w.r.t geometrical coordinate system", function() {
    it("should have valid position", function() {
      let robot = new Robot(0,0,"SOUTH");

      expect(robot.GetRobotPlayer())
        .to.have.property("position")
        .to.deep.equal({ x: 0, y: 0, direction: "SOUTH" });
    });
  });
});
