import RobotExecutor from "../src/robot/executor";
import Direction from "../src/helpers/direction";
import { expect } from "chai";
import sinon from "sinon";

describe("Robot Executor for user inputs", () => {
  describe("Place the Robot command", () => {
    let robotControllerMock = null;

    beforeEach(() => {
      robotControllerMock = sinon.mock({
        PlaceRobot: function() {
          return {
            x: 2,
            y: 3,
            direction: Direction.NORTH
          };
        }
      });
    });

    it("should parse the PLACE command", () => {
      robotControllerMock.expects("PlaceRobot").withArgs(0, 0, "NORTH");
      robotControllerMock.expects("PlaceRobot").withArgs(3, 3, "SOUTH");
      robotControllerMock.expects("PlaceRobot").withArgs(3, 3, "EAST");

      RobotExecutor.ExecuteAction(
        "PLACE 0,0,NORTH",
        robotControllerMock.object
      );
      RobotExecutor.ExecuteAction(
        "PLACE 3,3,SOUTH",
        robotControllerMock.object
      );
      RobotExecutor.ExecuteAction(
        "PLACE 3,3, EAST",
        robotControllerMock.object
      );
      robotControllerMock.verify();
    });

    it("should return the same output", () => {
      robotControllerMock.restore();

      expect(
        RobotExecutor.ExecuteAction(
          "PLACE 2,3,NORTH",
          robotControllerMock.object
        )
      ).to.deep.equal({
        x: 2,
        y: 3,
        direction: Direction.NORTH
      });
    });
  });
});
