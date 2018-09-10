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
        },
        Move: function() {
          return {
            x: 2,
            y: 3,
            direction: Direction.NORTH
          };
        },
        RotateToLeft: function() {
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

    it("should parse the MOVE command", () => {
      robotControllerMock.expects("Move");

      RobotExecutor.ExecuteAction("MOVE", robotControllerMock.object);
      robotControllerMock.verify();
    });

    it("should parse the LEFT command", () => {
        robotControllerMock.expects("RotateToLeft");
  
        RobotExecutor.ExecuteAction("LEFT", robotControllerMock.object);
        robotControllerMock.verify();
      });
    
    it("should return the valid output", () => {
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

      expect(RobotExecutor.ExecuteAction("FAKE", robotControllerMock.object)).to
        .be.false;
    });
  });
});
