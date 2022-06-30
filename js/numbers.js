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
* Takes array of numbers from split_screen function
* and turns float numbers into array of integer
* and according floating point position.
*
* @param {string} numbers Calculator output (screen)
* @return {array} array of arrays (integers, position of floating points)
*/

export function getNumber(numbers){
  let array_numbers = [];
  numbers.forEach((element) => {

  });
  return array_numbers;
}
