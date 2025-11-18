// Object with showName written as an arrow function
const user = {
    name: "Riya",
    showName: () => {
        console.log(this.name);  // ❌ this will be undefined
    }
};

user.showName(); // Output: undefined
