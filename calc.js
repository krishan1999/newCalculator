//variables
let button= document.getElementsByClassName('buttons');
let output= document.getElementsByClassName('output')[0];
let calc= document.getElementsByClassName("calculation")[0];
let clear= document.querySelector(".clear");
let total= document.querySelector(".total");




//functions
let clearOutput= () => {output.value=""};
let display= val => { console.log(`You pressed:${val.target.name}`)}
let write= (e) => { 

if(!( e.target.classList.contains("total") || e.target.classList.contains("clear")))
{
 let text= document.createTextNode(`${e.target.name}`);
 calc.appendChild(text);
}
}

//Creating mouse event funtions for all of the buttons
for (var i = button.length - 1; i >= 0; i--) {
 	
 	button[i].onclick= (e) => {
 	 display(e);
 	 write(e);
 	 clearOutput();
 	};
 }

 //calculating the total  IMP
total.addEventListener("click", function(e)
{
	let result;
    try
    {
    	result =eval(calc.textContent);
    	output.value= result;
    	output.classList.add("greencolor");
        calc.textContent="";
    }
    catch(e)
    {
    	console.log("Error Description:",e);
        
        output.style.color="red";
        output.value ="INVALID OPERATION";

    }
    
});

 //clearing the input
clear.onclick= (e) => { 
 calc.textContent= "";
 clearOutput();
 output.style.color="green";
}