const express = require('express');
const fs = require('fs');
const app = express();
const path = './users.json';

app.use(express.json());

// Check if username or email exists
app.post('/check-username-email', (req, res) => {
    const { username, email } = req.body;
    const users = JSON.parse(fs.readFileSync(path));

    const usernameExists = users.some(user => user.username === username);
    const emailExists = users.some(user => user.email === email);

    res.json({ exists: true, usernameExists, emailExists });
});

// Register a new user
app.post('/register', (req, res) => {
    const newUser = req.body;
    const users = JSON.parse(fs.readFileSync(path));

    // Add the new user to the array
    users.push(newUser);

    // Write updated users data to the JSON file
    fs.writeFileSync(path, JSON.stringify(users, null, 2));

    res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
