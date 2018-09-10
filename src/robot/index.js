import _ from "lodash";
import Command from "../command/command";
import Move from "../command/move";

/**
 * Creating a robot with position of (x, y) coordinate and cardinal direction .
 */

export default class Robot {
  /**
   * Constructs a robot position
   * @param {int} x
   * @param {int} y
   * @param {string} direction
   */

  constructor(table) {
    this.table = table;
    this.robot = null;
  }

  _safeToHangAround(intentedCommand) {
    let tableEdges = this.table.Boundaries;
    return (
      intentedCommand.X <= tableEdges.x2 &&
      intentedCommand.X >= tableEdges.x1 &&
      intentedCommand.Y <= tableEdges.y2 &&
      intentedCommand.Y >= tableEdges.y1
    );
  }

  _changeRobotState(command) {
    this.robot = { position: command };
    return true;
  }

  _execute(command) {
    if (!_.isEmpty(this.robot)) {
      let commandResult = command.Execute(this.robot.position);
      if (this._safeToHangAround(commandResult)) {
        return this._changeRobotState(commandResult);
      }
    }
    return false;
  }

  Move() {
    return this._execute(Move);
  }

  PlaceRobot(x, y, direction) {
    let result = new Command(x, y, direction);

    if (this._safeToHangAround(result)) {
      return this._changeRobotState(result);
    }

    return false;
  }

  GetRobotPosition() {
    if (!_.isEmpty(this.robot)) {
      return this.robot.position;
    }
    return null;
  }
}
