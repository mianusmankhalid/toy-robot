import Abstract from "./abstract";

export default class extends Abstract {
	/**
	 * Places the robot on the table
	 * @param {Command} command
	 */
	static Execute(command) {
		return command;
	}
}