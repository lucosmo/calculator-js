const btns = document.getElementsByClassName('btn');
const screen = document.getElementsByClassName('screen')[0];
/*
[...btns.children].forEach(element => {
    console.log(element);
});*/
let historyInput = [];
const re = /([^\=]+$)/;

Array.from(btns).forEach(child => {
    child.addEventListener('click', (e) => {
      switch(e.target.value) {
        case 'C':
          screen.innerHTML = "";
          break;
        case 'sign':
          if(!isNaN(screen.innerHTML)) {
            var number = Number(screen.innerHTML);
            number = -number;
            screen.innerHTML = number.toString();
          }
          break;
        case '=':
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
          console.log(historyInput);
          break;
        case 'back':
          /*if(historyInput[historyInput.length-1] == '=') {
            while(historyInput[historyInput.length-1] == '=') {
              historyInput.pop();
            }
          } else {
            historyInput.pop();
          }
          screen.innerHTML = historyInput.join("");*/
          historyInput = historyInput.slice(0,-2);
          let lastOperation = historyInput.join("").match(re);
          
          screen.innerHTML = lastOperation[0];
          break;
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
