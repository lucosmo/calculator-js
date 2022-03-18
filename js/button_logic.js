/*
 * @param object Object containing screen's html and history of clicked buttons
 * 
*/
export const clean_screen = calculatorData => {
  calculatorData.screen = '';
  calculatorData.history = [];
  return calculatorData;
}
