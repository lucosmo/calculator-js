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
* and according number of numbers in fraction.
*
* @param {string} numbers Calculator output (screen)
* @return {array} array of arrays (integers, position of floating points)
*/

export function getNumber(numbers){
  var re =/\./;
  var array_numbers = [];
  numbers.forEach((element) => {
    let pos = element.search(re);
    console.log("pos: "+pos);
    array_numbers.push([element,element.length - pos - 1]);
  });
  return array_numbers;
}

/**
* Takes 2 arrays containing number and position of comma/dot 
* of float number and multiply numbers
*/
export function floatMultiply(num1, num2){
  return num1[0]*num2[0]/(num1[1]*num2[2]);
}
