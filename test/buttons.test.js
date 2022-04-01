//const bfunctions = require('../js/buttons');
import * as bfunctions from './buttons.js'

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
let x = calculatorData("3%","3%");
test('check if percent of 3 (3%) is 0.03', (x) => {
  expect(bfunctions.calc_percent(x)[0]).toBe('0.03');
});
let x = calculatorData("1+3%","1+3%");
test('check if 1+3% is 1+0.03', (x) => {
  expect(bfunctions.calc_percent(x)[0]).toBe('1+0.03');
});
