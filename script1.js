
// Sample JSON data for user authentication
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

// Function to authenticate user
function authenticateUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

// Function to handle login submission
function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const authenticatedUser = authenticateUser(username, password);
    
    if (authenticatedUser) {
        // Successful login
        console.log("Login successful");
        // Redirect to dashboard or perform other actions
    } else {
        // Failed login
        console.log("Invalid username or password");
        // Display error message or perform other actions
    }
}