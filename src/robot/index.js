import _ from "lodash";
import Command from "../command/command";
import Move from "../command/move";
import Left from "../command/left";

export default class Robot {
  /**
   * Construct a Robot within the boundaries of the table
   * @param {Table} table
   */

  constructor(table) {
    this.table = table;
    this.robot = null;
  }

  /**
   * Hang around within the boundaries of the table
   * @param {Command} command
   */

  _safeToHangAround(intentedCommand) {
    let tableEdges = this.table.Boundaries;
    return (
      intentedCommand.X <= tableEdges.x2 &&
      intentedCommand.X >= tableEdges.x1 &&
      intentedCommand.Y <= tableEdges.y2 &&
      intentedCommand.Y >= tableEdges.y1
    );
  }

  /**
   * Updates intended state of Robot
   * @param {Command} command
   */

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

  RotateToLeft() {
    return this._execute(Left);
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
