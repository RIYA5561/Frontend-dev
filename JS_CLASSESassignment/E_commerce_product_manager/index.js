// ================================
// Product Class using ES6
// ================================
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply 10% discount
    applyDiscount() {
        this.price = this.price - (this.price * 0.10);
    }

    // Display product details (string formatted)
    details = () => {
        return `
        Product ID: ${this.id}
        Name: ${this.name}
        Price: ₹${this.price}
        Category: ${this.category}
        `;
    };
}


// Array to store products
let productList = [];


// ======================================
// DOM-BASED VALIDATION + PRODUCT CREATION
// ======================================
const addProduct = () => {

    // Get input values
    const id = document.getElementById("pid").value;
    const name = document.getElementById("pname").value;
    const price = document.getElementById("pprice").value;
    const category = document.getElementById("pcategory").value;

    // DOM Validation
    if (!id || !name || !price || !category) {
        document.getElementById("message").innerText =
            "❌ Please fill all fields.";
        return;
    }

    // Create Product object
    const p = new Product(Number(id), name, Number(price), category);

    // Apply a 10% discount
    p.applyDiscount();

    // Push into array
    productList.push(p);

    // Success Message
    document.getElementById("message").innerText =
        "✓ Product added successfully!";

    // Log all products with price > 1000 using filter()
    const expensive = productList.filter(item => item.price > 1000);

    console.log("Products with price > 1000:");
    console.table(expensive.map(e => e.details()));
};
