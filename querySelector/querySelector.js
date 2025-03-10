// Write the code as shown in the video below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';
mainHeading.style.padding = '0 30px';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.color = 'brown';

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';
}

fruitItems[0].style.backgroundColor = 'lightgray';
fruitItems[2].style.backgroundColor = 'lightgray';
fruitItems[1].style.backgroundColor = 'brown';
fruitItems[3].style.backgroundColor = 'brown';
fruitItems[1].style.color = 'white';
fruitItems[3].style.color = 'white';
// Write answer to the questions asked below: