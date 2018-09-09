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

  constructor(x, y, direction) {
    this.robot = {
      position: {
        x: x,
        y: y,
        direction: direction
      }
    };
  }
}
