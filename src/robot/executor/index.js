import Parse from "../../helpers/parser";
import _ from "lodash";

export default class {
  /**
   * Execute action commands provided by user
   * @param {string} text
   * @param {Robot} controller
   */
  static ExecuteAction(text, controller) {
    let regex = {
      place: /^\s*PLACE\s+([\d]+)\s*,\s*([\d]+)\s*,\s*(EAST|WEST|NORTH|SOUTH)\s*$/gim,
      move: /^\s*MOVE\s*$/gim,
      left: /^\s*LEFT\s*$/gim,
      right: /^\s*RIGHT\s*$/gim,
      report: /^\s*REPORT\s*$/gim
    };

    if (regex.move.exec(text)) {
      return controller.Move();
    } else if (regex.left.exec(text)) return controller.RotateToLeft();
    else if (regex.right.exec(text)) return controller.RotateToRight();
    else if (regex.report.exec(text)) return controller.GetRobotPosition();
    else {
      let place = regex.place.exec(text);
      if (!_.isEmpty(place)) {
        return controller.PlaceRobot(
          _.toInteger(place[1]),
          _.toInteger(place[2]),
          Parse(place[3])
        );
      }
    }

    return false;
  }
}
