import {clean_screen, change_sign, calc_evaluation, calc_percent, calc_back} from './button_logic.js';
import {takeLastNumber, CalculatorData} from './helpers.js';
import {split_screen, getNumber} from './numbers.js';

const btns = document.getElementsByClassName('btn');
const screen = document.getElementsByClassName('screen')[0];
let historyInput = [];
/*
 * Regular expression for searching for equal (=) sign in history of pressed buttons
 */
const re = /([^\=]+$)/;

Array.from(btns).forEach(child => {
    child.addEventListener('click', (e) => {
      const calculatorData = new CalculatorData(screen.innerHTML,historyInput)
      switch(e.target.value) {
        case 'C':
          const result = clean_screen(calculatorData);
          screen.innerHTML = result.screen;
          historyInput = result.history;
          break;
        case 'sign':
          screen.innerHTML = (change_sign(calculatorData)).screen;
          break;
        case '=':
          console.log(screen.innerHTML);
          console.log(split_screen(screen.innerHTML));
          let numbers = split_screen(screen.innerHTML);
          let output = calc_evaluation(calculatorData,e);

          screen.innerHTML = output.screen;
          historyInput = output.history;

          //console.log(numbers);
          console.log(getNumber(numbers));
          /*
          historyInput.push(e.target.value);
          console.log(historyInput);
          if (screen.innerHTML.includes(".")) {
            var x = (eval(screen.innerHTML));
            screen.innerHTML = x.toPrecision(screen.innerHTML.split(".")[1].length).toString();
            historyInput.push(screen.innerHTML);
          }
          else {
            screen.innerHTML = (eval(screen.innerHTML));
            historyInput.push(screen.innerHTML);
          }
          console.log(historyInput);*/

          break;
        case 'back':
          let output1 = calc_back(calculatorData);
          screen.innerHTML = output1.screen;
          historyInput = output1.history;
          /*
          historyInput = historyInput.slice(0,-2);
          let lastOperation = historyInput.join("").match(re);

          historyInput = historyInput.slice(0,-lastOperation[0].length+1);
          screen.innerHTML = lastOperation[0];
          console.log(historyInput);*/
          break;
        case '%':
          screen.innerHTML = calc_percent(calculatorData).screen;
          break;
        case '*':
        case '/':
        case '+':
        case '-':
        default:
          screen.innerHTML += ( e.target.value );
          historyInput.push(e.target.value);
          console.log(historyInput);
          break;
      }

    } );

});
/*
module.exports = {
  takeLastNumber,
  isNumeric
};*/
