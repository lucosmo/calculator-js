/**
  * Function takes string as argument, checks if string is numeric.
  *
  * @param {string} s Calculator output (screen)
  *
  * @return {bool} Returns true if s is numeric, false if s is not numeric
  */
export function isNumeric(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}

/**
  * Function takes string as argument, matches regex rule against argument
  * and returns result.
  *
  * @param {string} s Calculator output (screen)
  *
  * @return {array} Return array as matched regex
  * @return {null} If regex isn't matched
  */
export const takeLastNumber = s => {
  const reMath = /([^\+\-\*\/]+$)/;
  const reMath2 = /.*(\d)$/
  return s.match(reMath);
};
