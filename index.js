import prompt from "prompt";
import _ from "lodash";
import Executor from "./src/robot/executor";
import Robot from "./src/robot";
import Table from "./src/table";

let robot = new Robot(new Table(5, 5));

let continousPrompt = () => {
  prompt.get(["command"], (err, result) => {
    if (err) throw err;

    if (_.isEqual(result.command.toLowerCase(), "exit")) {
      return;
    }

    let output = Executor.ExecuteAction(result.command, robot);
    if (typeof output !== "boolean") {
      console.log(output);
    }

    continousPrompt();
  });
};

console.log("Robot begin :-)");

prompt.start();
continousPrompt();
