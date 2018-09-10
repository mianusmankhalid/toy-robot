import Left from "./left";
import Move from "./move";
import Place from "./place";
import Right from "./right";

/**
 * Including all robot commands to make the call simple
 */

const commands = {
  Left: Left,
  Move: Move,
  Place: Place,
  Right: Right
};

export default commands;
