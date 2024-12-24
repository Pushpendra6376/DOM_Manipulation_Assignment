// Create the h3 element
const subHeading = document.createElement('h3');

// Create text node for the h3 element
const subHeadingText = document.createTextNode('Buy high quality organic fruits online');

// Append the text node to the h3 element
subHeading.appendChild(subHeadingText);

// Style the h3 element with italic font style
subHeading.style.fontStyle = 'italic';

// Append the h3 element to the first div
const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(subHeading);

// Create the paragraph element
const para = document.createElement('p');

// Create text node for the paragraph
const paraText = document.createTextNode('Total fruits: 4');

// Append the text node to the paragraph
para.appendChild(paraText);

// Set the id for the paragraph
para.id = 'fruits-total';

// Insert the paragraph before the unordered list in the second div
const secondDiv = divs[1];
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits);
