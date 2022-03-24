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
