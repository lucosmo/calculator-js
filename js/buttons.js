const btns = document.getElementsByClassName('btn');
const screen = document.getElementsByClassName('screen')[0];
/*
[...btns.children].forEach(element => {
    console.log(element);
});*/
Array.from(btns).forEach(child => {
    child.addEventListener('click', (e) => {
        screen.innerHTML+= ( e.target.value );
    } );
    
});
/*btns.forEach(btn => {

   btn.addEventListener('click', event => {
        console.log( event.target.id );
   });

});*/