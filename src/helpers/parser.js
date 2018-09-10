import Direction from "./direction";
import _ from "lodash";

/**
 * Parse the provided string and validate the cardinal direction
 */

export default text => {
  let result = _.find(Object.keys(Direction), n => _.isEqual(text.toUpperCase(), n));
  if (_.isEmpty(result))
    throw new Error("Provided string is not a valid cardinal direction");
  return result;
};
