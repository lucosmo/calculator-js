import {clean_screen, change_sign, calc_evaluation, calc_percent, calc_back} from './button_logic.js';
import {takeLastNumber} from './helpers.js';

const btns = document.getElementsByClassName('btn');
const screen = document.getElementsByClassName('screen')[0];
/*
[...btns.children].forEach(element => {
    console.log(element);
});*/
let historyInput = [];
/*
 * Regular expression for searching for equal (=) sign in history of pressed buttons
 */
const re = /([^\=]+$)/;




/**
  * Function takes string and array as arguments, creates object containing these arguments.
  *
  * @param {string} calculator_screen Calculator output (screen)
  * @param {array} calculator_history Calculator's history of pressed buttons
  * @return {bool} Returns true if s is numeric, false if s is not numeric
  */
function CalculatorData(calculator_screen, calculator_history){
  this.screen = calculator_screen;
  this.history = calculator_history;
}


Array.from(btns).forEach(child => {
    child.addEventListener('click', (e) => {
      const calculatorData = new CalculatorData(screen.innerHTML,historyInput)
      switch(e.target.value) {
        case 'C':
          const result = clean_screen(calculatorData);
          screen.innerHTML = result.screen;
          historyInput = result.history;
          /*
          screen.innerHTML = "";
          historyInput = [];*/
          break;
        case 'sign':
          screen.innerHTML = (change_sign(calculatorData)).screen;
        /*
          if((!isNaN(screen.innerHTML))&&(isNumeric(screen.innerHTML))) {
            var number = Number(screen.innerHTML);
            number = -number;
            screen.innerHTML = number.toString();
          }*/

          break;
        case '=':
          let output = calc_evaluation(calculatorData,e);
          screen.innerHTML = output.screen;
          historyInput = output.history;
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
          let output = calc_back(calculatorData);
          screen.innerHTML = output.screen;
          historyInput = output.history;
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

      /*

      if(e.target.value == 'C') {
        screen.innerHTML = "";
      }
      else if(e.target.value == 'sign') {
        if(!isNaN(screen.innerHTML)) {
          var number = Number(screen.innerHTML);
          number = -number;
          screen.innerHTML = number.toString();
        }

      }
      else if(e.target.value=='=') {
        historyInput.push(e.target.value);
        console.log(historyInput);
        if (screen.innerHTML.includes(".")) {
          var x = (eval(screen.innerHTML));
          screen.innerHTML = x.toPrecision(screen.innerHTML.split(".")[1].length).toString();
        }
        else {
          screen.innerHTML = (eval(screen.innerHTML));
        }
      }
      else if(e.target.value == 'back') {
        if(historyInput[historyInput.length-1] == '=') {
          while(historyInput[historyInput.length-1] == '=') {
            historyInput.pop();
          }
        } else {
          historyInput.pop();
        }


        screen.innerHTML = historyInput.join("");
      }
      else {
        screen.innerHTML += ( e.target.value );
        historyInput.push(e.target.value);
        console.log(historyInput);
      }*/
    } );

});
/*
module.exports = {
  takeLastNumber,
  isNumeric
};*/
