//const bfunctions = require('../js/helpers.js');
import * as bfunctions from '../js/helpers.js'
import * as blogic from '../js/helpers.js'

test('check if last number in "1+3+34" is 34', () => {
  expect(bfunctions.takeLastNumber("1+3+34")[0]).toBe('34');
});
test('check if last number in "1" is 1', () => {
  expect(bfunctions.takeLastNumber("1")[0]).toBe('1');
});
test('check if last number in "1-dagdhj" is 1', () => {
  expect(bfunctions.takeLastNumber("1")[0]).toBe('1');
});
test('check if last number in "1+3+34fd" is 3', () => {
  expect(bfunctions.takeLastNumber("1+3+34fd")[0]).toBe('3');
});
let xy = bfunctions.CalculatorData("3%","3%");
test('check if percent of 3 (3%) is 0.03', (xy) => {
  expect(bfunctions.calc_percent(xy)[0]).toBe('0.03');
});
let xz = bfunctions.CalculatorData("1+3%","1+3%");
test('check if 1+3% is 1+0.03', (xz) => {
  expect(bfunctions.calc_percent(xz)[0]).toBe('1+0.03');
});
