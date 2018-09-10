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

  constructor() {
    this.robot = null;
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

    return this._changeRobotState(result);
  }

  GetRobotPosition() {
    if (!_.isEmpty(this.robot)) {
      return this.robot.position;
    }
    return null;
  }
}
