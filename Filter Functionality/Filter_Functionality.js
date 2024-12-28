// 1. Add input element inside form, before the button, to take the fruit description
const form = document.querySelector("form");
const fruitInput = document.getElementById("fruit-to-add");

// Create the new input for fruit description
const descriptionInput = document.createElement("input");
descriptionInput.type = "text";
descriptionInput.id = "description";
descriptionInput.placeholder = "Enter fruit description";

// Add the new input before the submit button
form.insertBefore(descriptionInput, fruitInput.nextSibling);

// 2. Show fruit name, description, and delete button when form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values entered by the user
    const fruitName = fruitInput.value.trim();
    const fruitDescription = descriptionInput.value.trim();

    // Check if both fields are filled
    if (fruitName === "" || fruitDescription === "") {
        return; // Exit if either field is empty
    }

    // Create a new list item for the fruit
    const fruitList = document.querySelector(".fruits");
    const fruitItem = document.createElement("li");
    fruitItem.className = "fruit";

    // Add the fruit name and description to the list item
    const fruitNameSpan = document.createElement("span");
    fruitNameSpan.textContent = fruitName;

    const fruitDescriptionParagraph = document.createElement("p");
    fruitDescriptionParagraph.textContent = fruitDescription;
    fruitDescriptionParagraph.style.fontStyle = "italic"; // Make description italic

    // Create a delete button for the fruit
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "x";

    // Event listener to remove the fruit when delete button is clicked
    deleteButton.addEventListener("click", function () {
        fruitItem.remove();
    });

    // Append name, description, and delete button to the list item
    fruitItem.appendChild(fruitNameSpan);
    fruitItem.appendChild(fruitDescriptionParagraph);
    fruitItem.appendChild(deleteButton);

    // Append the new fruit item to the list
    fruitList.appendChild(fruitItem);

    // Clear the input fields
    fruitInput.value = "";
    descriptionInput.value = "";
});

// 3. Filter fruits by name or description
const filter = document.getElementById('filter');
filter.addEventListener('keyup', function (event) {
    const searchValue = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');
    for (let i = 0; i < fruitItems.length; i++) {
        if (fruitItems[i].textContent.toLowerCase().includes(searchValue)) {
            fruitItems[i].style.display = 'block';
        } else {
            fruitItems[i].style.display = 'none';
        }
    }
});


const descriptionFilter = document.getElementById('filter');
descriptionFilter.addEventListener('keyup', function (e) {
    const searchValue = e.target.value.toLowerCase();
    const fruitDescription = document.getElementsById('description');
    for (let i = 0; i < fruitDescription.length; i++) {
       if (fruitDescription[i].textContent.toLowerCase().includes(searchValue)) {
            fruitDescription[i].style.display = 'block';
        } else {
            fruitDescription[i].style.display = 'none';
        }
    }

});

