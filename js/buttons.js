const btns = document.getElementsByClassName('btn');
const screen = document.getElementsByClassName('screen')[0];
/*
[...btns.children].forEach(element => {
    console.log(element);
});*/
let historyInput = [];
Array.from(btns).forEach(child => {
    child.addEventListener('click', (e) => {
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
      }
    } );

});
