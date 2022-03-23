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
