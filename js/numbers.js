/**
* Takes calculator screen and split it by math operators (+,-,/,*) to array of numbers
*
* @param {string} calculator_screen Calculator output (screen)
* @return {array} array of numbers (integers)
*/

export function split_screen(calculator_screen){
    let re = /[\+\-\*\/]/;
    let numbers = calculator_screen.split(re);
    return numbers;
}

/**
* Takes calculator screen and turns it into array of numbers
*
* @param {string} numbers Calculator output (screen)
* @return {array} array of numbers (integers)
*/

export function getNumber(numbers){
  return 
}
