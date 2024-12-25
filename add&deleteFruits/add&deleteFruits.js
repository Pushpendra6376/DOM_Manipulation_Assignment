const form = document.querySelector('form'); // Select the form element
const fruits = document.querySelector('.fruits'); // Select the ul element

// Function to add an Edit button to any li element
function addEditButton(liElement) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    liElement.appendChild(editButton);
}

// Add Edit buttons to all existing li elements
const existingItems = fruits.querySelectorAll('li');
existingItems.forEach((li) => {
    addEditButton(li);
});

// Handle form submission to add a new fruit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload on form submission

    // Select the input element
    const fruitToAdd = document.getElementById('fruit-to-add');

    if (fruitToAdd.value.trim() === '') {
        alert('Please enter a fruit name!');
        return;
    }

    // Create a new li element
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.textContent = fruitToAdd.value + ' ';

    // Add Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.className = 'delete-btn';
    newLi.appendChild(deleteButton);

    // Add Edit button
    addEditButton(newLi);

    // Append the new li to the ul
    fruits.appendChild(newLi);

    // Clear the input field
    fruitToAdd.value = '';
});

// Handle click events on the ul
fruits.addEventListener('click', function (event) {
    // Check if a delete button was clicked
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});
