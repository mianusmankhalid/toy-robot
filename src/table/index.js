/**
 * Creating a table-top with dimensions X * Y for robot to move.
 */
export default class {

    constructor(dimensionX, dimensionY) {
        this.valueX = dimensionX;
        this.valueY = dimensionY;
    }

    /**
    * Get the table boundaries
    */
   get Boundaries() {
       return {
           x1: 0,
           y1: 0,
           x2: this.valueX - 1,
           y2: this.valueY - 1,
       };
   }
}