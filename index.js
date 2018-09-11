import prompt from "prompt";
import _ from "lodash";

let continousPrompt = () => {
  prompt.get(["command"], (err, result) => {
    if (err) throw err;

    if (_.isEqual(result.command.toLowerCase(), "exit")) {
      return;
    }

    console.log(result.command);

    continousPrompt();
  });
};

console.log("Type exit to exit ;-)");

prompt.start();
continousPrompt();