//const bfunctions = require('../js/helpers.js');
import * as bfunctions from '../js/helpers.js'
import * as blogic from '../js/button_logic.js'
import fetch from 'node-fetch'
jest.useFakeTimers('legacy');
test('check if last number in "1+3+34" is 34', () => {
  expect(bfunctions.takeLastNumber("1+3+34")[0]).toBe('34');
});
test('check if last number in "1" is 1', () => {
  expect(bfunctions.takeLastNumber("1")[0]).toBe('1');
});
test('check if last number in "100" is 100', () => {
  expect(bfunctions.takeLastNumber("100")[0]).toBe('100');
});
test('check if last number in "1+3+34" is 34', () => {
  expect(bfunctions.takeLastNumber("1+3+34")[0]).toBe('34');
});
let cd1 = new bfunctions.CalculatorData("1+2",['1','+','2']);
// IMPORTANT
// Two next tests fails in result of issues connected to importing 'node-fetch' module.
//

test('check if CalculatorData creates proper object', () => {
  return bfunctions.CalculatorData("1+2",['1','+','2']).then(data => {
    expect(data.screen).toBe('1+2');
  });
});
/*
test('the data is peanut butter', cd1 => {
  function callback(cd1) {
    try {
      expect(cd1.screen).toBe('1+2');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
*/
let xy = new bfunctions.CalculatorData("3%",["3","%"]);
test('check if percent of 3 (3%) is 0.03', (xy) => {
  expect(blogic.calc_percent(xy)[0]).toBe('0.03');
});
let xz = new bfunctions.CalculatorData("1+3%","1+3%");
test('check if 1+3% is 1+0.03', (xz) => {
  expect(blogic.calc_percent(xz)[0]).toBe('1+0.03');
});
xz = new bfunctions.CalculatorData("2","2");
test('check if 2% is 0.02', (xz) => {
  expect(blogic.calc_percent(xz)[0]).toBe('0.02');
});
xz = "1234";
test('check if "1234" is numeric', (xz) => {
  expect(bfunctions.isNumeric(xz)).toBe(true);
});
xz = "1234.03";
test('check if "1234.03" is numeric', (xz) => {
  expect(bfunctions.isNumeric(xz)).toBe(true);
});/*
xz = "bhsjd1234";
test('check if "bhsjd1234" is numeric', (xz) => {
  expect(bfunctions.isNumeric(xz)).toBe(false);
});*/
