import _ from "lodash";
import Command from "../command/command";
import RobotCommands from "../command";

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

  /**
   * Execute the command to change Robot's position or Orientation within boundaries
   * @param {Command} command
   */
  _execute(command) {
    if (!_.isEmpty(this.robot)) {
      let commandResult = command.Execute(this.robot.position);
      if (this._safeToHangAround(commandResult)) {
        return this._changeRobotState(commandResult);
      }
    }
    return false;
  }

  /**
   * To rotate the Robot in 90 degrees clockwise
   */
  RotateToRight() {
    return this._execute(RobotCommands.Right);
  }

  /**
   * To rotate the Robot in 90 degrees anti-clockwise
   */
  RotateToLeft() {
    return this._execute(RobotCommands.Left);
  }

  /**
   * To move the Robot in same direction
   */
  Move() {
    return this._execute(RobotCommands.Move);
  }

  /**
   * To place the Robot on the table within boundaries
   */
  PlaceRobot(x, y, direction) {
    let result = RobotCommands.Place.Execute(new Command(x, y, direction));

    if (this._safeToHangAround(result)) {
      return this._changeRobotState(result);
    }

    return false;
  }

  /**
   * To get the current position of the Robot
   */
  GetRobotPosition() {
    if (!_.isEmpty(this.robot)) {
      return this.robot.position;
    }
    return null;
  }
}
