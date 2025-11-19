
// Product List Manager
// Using Event Delegation
// ===============================

// Selecting DOM elements
const inputBox = document.getElementById("product-input");
const addBtn = document.getElementById("add-btn");
const productList = document.getElementById("product-list");

let currentlyEditing = null; 


addBtn.addEventListener("click", () => {
    const productName = inputBox.value.trim();

    if (productName === "") return;

    addProduct(productName);
    inputBox.value = "";
});

// Function to create product <li>
function addProduct(name) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="text">${name}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    productList.appendChild(li);
}


productList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("delete-btn")) {
        target.parentElement.remove();
    }

    else if (target.classList.contains("edit-btn")) {
        const li = target.parentElement;
        enterEditMode(li);
    }
});

function enterEditMode(li) {
 
    if (currentlyEditing && currentlyEditing !== li) {
        exitEditMode(currentlyEditing);
    }

    currentlyEditing = li;

    const textSpan = li.querySelector(".text");
    const oldText = textSpan.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = oldText;
    input.classList.add("edit-input");

    li.insertBefore(input, textSpan);
    textSpan.style.display = "none";

    input.focus();
}


document.addEventListener("click", (event) => {

    if (!currentlyEditing) return;

    if (currentlyEditing.contains(event.target)) return;

    exitEditMode(currentlyEditing);
});

function exitEditMode(li) {
    const input = li.querySelector(".edit-input");
    const textSpan = li.querySelector(".text");

    if (input) {
        textSpan.textContent = input.value.trim() || "Unnamed Product";
        textSpan.style.display = "inline";
        input.remove();
    }

    currentlyEditing = null;
}
