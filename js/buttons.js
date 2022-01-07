const btns = document.getElementsByClassName('btn');
const screen = document.getElementsByClassName('screen')[0];
/*
[...btns.children].forEach(element => {
    console.log(element);
});*/
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
        if (screen.innerHTML.includes(".")) {
          var x = (eval(screen.innerHTML));
          screen.innerHTML = x.toPrecision(screen.innerHTML.split(".")[1].length).toString();
        }
        else {
          screen.innerHTML = (eval(screen.innerHTML));
        }
      }
      else {
        screen.innerHTML+= ( e.target.value );
      }
    } );

});
