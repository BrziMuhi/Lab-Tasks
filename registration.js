// Import the users from users.json (in a real-world scenario, you'd fetch this from a server)
const users = require('./users.json'); // You'll need to use a server or local storage in practice

// Handle registration function
function handleRegistration() {
    // Get input values
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validation: Check if username and email are unique
    const usernameExists = users.some(user => user.username === username);
    const emailExists = users.some(user => user.email === email);

    // Display dynamic messages
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = ''; // Clear previous messages

    if (usernameExists) {
        messageContainer.innerHTML += '<p class="text-danger">Username already taken. Please choose a different one.</p>';
    }
    if (emailExists) {
        messageContainer.innerHTML += '<p class="text-danger">Email already registered. Please use a different email address.</p>';
    }
    if (usernameExists || emailExists) {
        return; // Stop if there's a validation error
    }

    // If no errors, create a new user and add it to the users array (you'd typically save this to a database in real-world scenarios)
    const newUser = {
        name,
        username,
        email,
        password,
        age,
        phone,
        gender
    };

    users.push(newUser); // Add the new user to the array (simulate saving)
    
    // Display success message
    messageContainer.innerHTML += '<p class="text-success">Registration successful! You can now log in.</p>';
    
    // Optionally, clear the form fields after success
    document.getElementById('registrationForm').reset();
}
