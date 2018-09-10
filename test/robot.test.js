import { expect } from "chai";
import Robot from "../src/robot";
import Table from "../src/table";
import Direction from "../src/helpers/direction";

describe("A true robot", function() {
  describe("Given the presence on the table", function() {
    let robot = null;

    beforeEach(() => {
      robot = new Robot(new Table(5, 5));
      robot.PlaceRobot(0, 0, Direction.NORTH);
    });

    it("should place anywhere on the table", function() {
      expect(robot.GetRobotPosition()).to.deep.equal({
        x: 0,
        y: 0,
        direction: Direction.NORTH
      });
    });

    it("should have valid location parameters", function() {
      expect(robot.GetRobotPosition()).to.have.keys(["direction", "x", "y"]);
    });

    it("should move within the boundaries of the table", function() {
      robot.PlaceRobot(0, 1, Direction.NORTH);

      expect(robot.GetRobotPosition()).to.deep.equal({
        x: 0,
        y: 1,
        direction: Direction.NORTH
      });
    });
  });

  describe("Given the presence w.r.t geometrical coordinate system", function() {
    it("should not place within the boundaries of table", function() {
      let robot = new Robot(new Table(5, 5));
      robot.PlaceRobot(6, 6, Direction.NORTH);
      expect(robot.GetRobotPosition()).to.be.null;
    });
  });
});
