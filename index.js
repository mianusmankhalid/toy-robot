import prompt from "prompt";
import _ from "lodash";
import Executor from "./src/robot/executor";
import Robot from "./src/robot";
import Table from "./src/table";
import chalk from "chalk";

let robot = new Robot(new Table(5, 5));

let continousPrompt = () => {
  prompt.get(["command"], (err, result) => {
    if (err) throw err;

    if (_.isEqual(result.command.toLowerCase().trim(), "exit")) {
      return;
    }

    let output = Executor.ExecuteAction(result.command, robot);
    if (typeof output !== "boolean") {
      console.log(output);
    }

    continousPrompt();
  });
};

console.log(chalk.blue.bgWhite.bold("Welcome to toy-robot simulation"));
console.log(
  chalk.white.bgCyanBright(
    "\nPlaying for 5*5 square tabletop \nthe valid Commands are as follows"
  )
);
console.log(
  chalk.white.bgRedBright.bold(
    "\nPLACE X,Y,NORTH|SOUTH|EAST|WEST \nMOVE \nLEFT \nRIGHT \nREPORT \nEXIT"
  )
);

prompt.start();
continousPrompt();
