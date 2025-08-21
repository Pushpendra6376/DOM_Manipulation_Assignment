const ul = document.querySelector('.fruits');
ul.style.backgroundColor = 'pink';

//step 1 :- create a element 
const para = document.createElement('p');

//step 2:- ab jo bhi display krnaa ha bo 

const paraText = document.createTextNode('this is only for testing');

// step 3:- ab jo element create kiyah usme isko merge krdo 
para.appendChild(paraText);


// step 4 :- ab apni html me jaha pe isko display krana hai usko selet kro by querySelector 
const divs = document.getElementsByTagName('div');

const firstDiv = divs[0];

firstDiv.appendChild(para);

// step 5:- extra me idhar hum apne bnae ghue element ko class id aur attributes de sakte hai like

para.className = 'nothing';
para.id = 'paraerfg';
para.setAttribute('title', 'this is a paragraph');

console.log(para);




