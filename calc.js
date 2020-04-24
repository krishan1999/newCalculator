let buttons= document.getElementsByClassName('buttons');
//buttons.forEach( val => {console.log(val)});
console.log(buttons.length);
for (var i = buttons.length - 1; i >= 0; i--) {
	buttons[i].onclick= () => {display(i)};
}

let display= val => { console.log(`You pressed  ${val} button`)}
