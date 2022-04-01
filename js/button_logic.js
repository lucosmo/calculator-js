import {isNumeric, takeLastNumber} from './helpers.js'
/**
 * Function takes current values of calculator screen and history of operations as object calculatorData, sets them empty and returns the object
 *
 * @param {object} Object containing screen's html and history of clicked buttons
 * @return {object} Returns modified object with reset values
*/
export const clean_screen = calculatorData => {
  calculatorData.screen = '';
  calculatorData.history = [];
  return calculatorData;
}

/**
 * Function changes sign of the number visible on the screen:
 * 3 becomes -3
 * -4 becomes 4
 *
 * @param {object} Object containing screen's html and history of clicked buttons
 * @return {object} Returns modified object with changed sign (-/+) of number (object.screen)
*/
  export const change_sign = calculatorData => {
  if(isNumeric(calculatorData.screen)){
    let number = Number(calculatorData.screen);
    number = -number;
    calculatorData.screen = number.toString();
  }
  return calculatorData;
  }

/**
 * Function evaluates math operations visible on the screen of the calculator
 *
 * @param {object} Object containing screen's html and history of clicked buttons
 * @return {object} Returns modified object with result of the math operation and updated history
*/
  export const calc_evaluation = (calculatorData, e) => {
    calculatorData.history.push(e.target.value);
    calculatorData.screen = (eval(calculatorData.screen));
    calculatorData.history.push(calculatorData.screen);
    /*
      FLOAT DOUBLE PRECISION TO BE FIXED
    */

    return calculatorData;
  }

  /**
   * Function turning percent into float number:
   * 3% = 0.03
   *
   * @param {object} Object containing screen's html and history of clicked buttons
   * @return {object} Returns modified object with percent turned to float number and updated history
  */

  export const calc_percent = calculatorData => {
      if(calculatorData.screen || calculatorData.screen.length!==0) {
        let x = takeLastNumber(calculatorData.screen)[0];
        //cuts off the last number from for example 1+3%
        calculatorData.screen = calculatorData.screen.replace(x,'');
        //turns 3% into 0.03
        let number = Number(x)/100;
        //adds 0.03 at the end of '1+'
        calculatorData.screen += number.toString();
      }
      return calculatorData;
  }

  export const calc_back = calculatorData => {
    return calculatorData;
  }
