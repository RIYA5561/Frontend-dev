// ==============================
// VALIDATION FUNCTION
// ==============================
const validateForm = () => {

    // Input elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    // Error message elements
    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const phoneErr = document.getElementById("phoneErr");
    const passErr = document.getElementById("passErr");

    // ============================
    // Regular Expressions
    // ============================
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

    // Track form validity
    let isValid = true;

    // ================================
    // NAME VALIDATION
    // ================================
    if (!nameRegex.test(name.value)) {
        name.style.border = "2px solid red";
        nameErr.innerText = "Name must contain only alphabets.";
        isValid = false;
    } else {
        name.style.border = "2px solid green";
        nameErr.innerText = "";
    }

    // ================================
    // EMAIL VALIDATION
    // ================================
    if (!emailRegex.test(email.value)) {
        email.style.border = "2px solid red";
        emailErr.innerText = "Enter a valid email format (example@domain.com).";
        isValid = false;
    } else {
        email.style.border = "2px solid green";
        emailErr.innerText = "";
    }

    // ================================
    // PHONE VALIDATION
    // ================================
    if (!phoneRegex.test(phone.value)) {
        phone.style.border = "2px solid red";
        phoneErr.innerText = "Phone number must be exactly 10 digits.";
        isValid = false;
    } else {
        phone.style.border = "2px solid green";
        phoneErr.innerText = "";
    }

    // ================================
    // PASSWORD VALIDATION
    // ================================
    if (!passRegex.test(password.value)) {
        password.style.border = "2px solid red";
        passErr.innerText =
            "Password must include 1 uppercase letter, 1 number, and 1 special character.";
        isValid = false;
    } else {
        password.style.border = "2px solid green";
        passErr.innerText = "";
    }

    // Final validation message
    if (isValid) {
        alert("Form submitted successfully!");
    }
};
