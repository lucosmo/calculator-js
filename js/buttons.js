const btns = document.getElementsByClassName('btn');
const screen = document.getElementsByClassName('screen')[0];
/*
[...btns.children].forEach(element => {
    console.log(element);
});*/
Array.from(btns).forEach(child => {
    child.addEventListener('click', (e) => {
      if(e.target.value=='=') {
        screen.innerHTML= ( eval(screen.innerHTML));
      }
      else {
        screen.innerHTML+= ( e.target.value );
      }
    } );

});
