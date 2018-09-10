import Direction from "../helpers/direction";
import _ from "lodash";

export default class {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;

    if (!_.includes(Direction, direction))
      throw new Error("Invalid direction");
    this.direction = direction;
  }

  get X() {
    return this.x;
  }

  get Y() {
    return this.y;
  }

  get Direction() {
    return this.direction;
  }
}