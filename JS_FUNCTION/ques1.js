// Function that greets the user and then executes a callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Calling the callback function
    callback();
}

// Callback function that prints the ending message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstrating callback flow
greetUser("Riya", showEndMessage);
