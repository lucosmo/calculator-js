const bfunctions = require('../js/buttons');

test('check if last number in "1+3+34" is 34', () => {
  expect(bfunctions.takeLastNumber("1+3+34")[0]).toBe('34');
});
test('check if last number in "1+3+34fd" is 3', () => {
  expect(bfunctions.takeLastNumber("1+3+34fd")[0]).toBe('3');
});
