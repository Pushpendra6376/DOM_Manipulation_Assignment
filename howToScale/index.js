function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Debugging: Log event.target
    //console.log(event.target);

    // Get input values from the form
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    // Create an object for the new user
    const newUser = {
        username: username,
        email: email,
        phone: phone,
    };

    // Add the new user to localStorage (store only the latest entry)
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(users));

    // Add the new user to the list in the DOM immediately
    addUserToDOM(newUser);
}

// Function to add a single user's details to the DOM
function addUserToDOM(user) {
    const userList = document.getElementById("userList");

    const listItem = document.createElement("li");
    listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

    userList.appendChild(listItem); // Add the new user's details to the list
}

//module.exports = handleFormSubmit;
