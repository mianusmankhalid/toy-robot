import Abstract from "./abstract";
import Direction from "../helpers/direction";
import Command from "./command";
import _ from "lodash";

export default class extends Abstract {
  static Execute(command) {
    let directions = [
      Direction.NORTH,
      Direction.EAST,
      Direction.SOUTH,
      Direction.WEST
    ];

    // _.values(Direction);
    let result = _.findIndex(directions, item =>
      _.isEqual(item, command.Direction)
    );

    let selectedDirection = null;
    if (result === 0) selectedDirection = directions[_.size(directions) - 1];
    else selectedDirection = directions[result - 1];

    return new Command(command.X, command.Y, selectedDirection);
  }
}
