// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = {
        username,
        email,
        phone
    };

    // Add the details to local storage
    localStorage.setItem(email, JSON.stringify(userDetails));
    // Update the UI
    appendUserToList(userDetails);
}

// Function to append a user to the list
function appendUserToList(userDetails) {
    const ul = document.querySelector('ul');

    // Create a list item
    const li = document.createElement('li');
    li.innerHTML = `${userDetails.username} - ${userDetails.email} - ${userDetails.phone} `;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => removeUserFromList(userDetails, li);

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the unordered list
    ul.appendChild(li);
}

// Function to remove a user from the list and local storage
function removeUserFromList(userDetails, li) {
    // Remove the user from local storage
    localStorage.removeItem(userDetails.email);
    // Remove the list item from the DOM
    li.remove();
}
module.exports = handleFormSubmit;