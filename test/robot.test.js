import { expect } from "chai";
import Robot from "../src/robot";

describe("A true robot", function() {
  describe("Given the presence w.r.t geometrical coordinate system", function() {
    let robot = null;

    beforeEach(() => {
        robot = new Robot();
        robot.PlaceRobot(0, 0, "SOUTH");
    });

    it("should have valid position", function() {
      expect(robot.GetRobotPosition()).to.deep.equal({
        x: 0,
        y: 0,
        direction: "SOUTH"
      });
    });
    
    it("should have valid location parameters", function() {
      expect(robot.GetRobotPosition()).to.have.keys(["direction", "x", "y"]);
    });
  });
});
