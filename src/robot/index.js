import _ from "lodash";

/**
 * Creating a robot with position of (x, y) coordinate and cardinal direction .
 */

export default class {
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
      intentedCommand.x <= tableEdges.x2 &&
      intentedCommand.x >= tableEdges.x1 &&
      intentedCommand.y <= tableEdges.y2 &&
      intentedCommand.y >= tableEdges.y1
    );
  }

  _changeRobotState(command) {
    this.robot = { position: command };
    return true;
  }

  PlaceRobot(x, y, direction) {
    let result = {
      x: x,
      y: y,
      direction: direction
    };

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
