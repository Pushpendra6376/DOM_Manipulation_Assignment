// Do not write anything here
const forms = document.querySelector('form');
forms.style.padding = '25px';
forms.style.backgroundColor = 'pink';

const input = document.querySelector('input[type="text"]');
input.id = 'name';

const label = document.querySelector('label');
label.setAttribute('for', 'name');

input.style.height = '25px';

if (label.getAttribute('for') === 'name') {
    label.style.fontStyle = 'italic';
}

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = 'btn'; 
}

const btns = document.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].style.marginTop = '25px';
    btns[i].style.padding = '10px';
}

