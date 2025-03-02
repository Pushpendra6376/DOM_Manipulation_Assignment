function handleFormSubmit(event) {
    event.preventDefault();
    
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };

    axios
        .post("https://crudcrud.com/api/539622211d824894a75f1a4375d0b6cf/users", userDetails)
        .then((response) => displayUserOnScreen(response.data))  // response.data me _id bhi milega
        .catch((error) => console.log(error));

    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}

function getUsers() {
    axios
        .get("https://crudcrud.com/api/539622211d824894a75f1a4375d0b6cf/users")
        .then((response) => {
            response.data.forEach(user => displayUserOnScreen(user));
        })
        .catch((error) => console.log(error));
}

function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
        document.createTextNode(
            `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
        )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

    // DELETE Request on button click
    deleteBtn.addEventListener("click", function () {
        axios
            .delete(`https://crudcrud.com/api/539622211d824894a75f1a4375d0b6cf/users/${userDetails._id}`)
            .then(() => {
                userList.removeChild(userItem);
            })
            .catch((error) => console.log(error));
    });

    // EDIT Functionality
    editBtn.addEventListener("click", function () {
        // Pehle delete request bhejo
        axios
            .delete(`https://crudcrud.com/api/539622211d824894a75f1a4375d0b6cf/users/${userDetails._id}`)
            .then(() => {
                userList.removeChild(userItem);

                // Input fields me old values daal do
                document.getElementById("username").value = userDetails.username;
                document.getElementById("email").value = userDetails.email;
                document.getElementById("phone").value = userDetails.phone;
            })
            .catch((error) => console.log(error));
    });
}

// Page load hone par existing users fetch karo
window.addEventListener("DOMContentLoaded", getUsers);
