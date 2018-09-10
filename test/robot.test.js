import { expect } from "chai";
import Robot from "../src/robot";
import Table from "../src/table";

describe("A true robot", function() {
  describe("Given the presence on the table", function() {
    let robot = null;

    beforeEach(() => {
      robot = new Robot(new Table(5, 5));
      robot.PlaceRobot(0, 0, "SOUTH");
    });

    it("should place anywhere on the table", function() {
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

  describe("Given the presence w.r.t geometrical coordinate system", function() {
    it("should not place within the boundaries of table", function() {
      let robot = new Robot(new Table(5, 5));
      robot.PlaceRobot(6, 6, "SOUTH");
      expect(robot.GetRobotPosition()).to.be.null;
    });
  });
});
