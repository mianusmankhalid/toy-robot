import Direction from "../helpers/direction";
import _ from "lodash";

/**
 * Placing a Robot with position of (x, y) coordinate and cardinal direction.
 */

export default class {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;

    // if the direction is not valid accroding to cardinal system
    if (!_.includes(Direction, direction)) throw new Error("Invalid direction");
    this.direction = direction;
  }

  /**
   * It will return X coordinate of Robot's position
   */
  get X() {
    return this.x;
  }

  /**
   * It will return Y coordinate of Robot's position
   */
  get Y() {
    return this.y;
  }

  /**
   * It will return the direction of the robot according to cardinal system
   */
  get Direction() {
    return this.direction;
  }

  /**
   * To override console.log
   */
  inspect(depth, opts) {
    return this.X + "," + this.Y + "," + this.Direction;
  }
}
