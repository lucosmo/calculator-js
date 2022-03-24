import {isNumeric} from './helpers.js'
/*
 * @param object Object containing screen's html and history of clicked buttons
 * @return object Returns modified object with reset values
*/
export const clean_screen = calculatorData => {
  calculatorData.screen = '';
  calculatorData.history = [];
  return calculatorData;
}

/*
 * @param object Object containing screen's html and history of clicked buttons
 * @return object Returns modified object with changed sign (-/+) of number (object.screen)
*/
  export const change_sign = calculatorData => {
  if(isNumeric(calculatorData.screen)){
    let number = Number(calculatorData.screen);
    number = -number;
    calculatorData.screen = number.toString();
  }
  return calculatorData;
  }
