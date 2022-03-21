/*
 * @param object Object containing screen's html and history of clicked buttons
 * @return object Returns modified object with reset values
*/
export const clean_screen = calculatorData => {
  calculatorData.screen = '';
  calculatorData.history = [];
  return calculatorData;
}
