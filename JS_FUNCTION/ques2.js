// Function that applies a given operation (callback) to each number in the array
function applyOperation(numbers, operation) {
    const result = [];

    for (let num of numbers) {
        result.push(operation(num)); // apply callback on each element
    }

    return result;
}

// Callback to double a number
function double(num) {
    return num * 2;
}

// Callback to square a number
function square(num) {
    return num * num;
}

// Test data
const arr = [1, 2, 3, 4];

// Using applyOperation
console.log("Doubled:", applyOperation(arr, double)); 
console.log("Squared:", applyOperation(arr, square));
