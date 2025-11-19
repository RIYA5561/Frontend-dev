// ==============================
// Multi-Step Form Logic
// ==============================

// Step containers
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const summaryStep = document.getElementById("summary-step");

// Inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

// Error fields
const nameErr = document.getElementById("name-error");
const emailErr = document.getElementById("email-error");
const passErr = document.getElementById("pass-error");

// Buttons
document.getElementById("next-1").addEventListener("click", validateStep1);
document.getElementById("next-2").addEventListener("click", validateStep2);
document.getElementById("finish").addEventListener("click", validateStep3);
document.getElementById("back-2").addEventListener("click", () => showStep(step1, step2));
document.getElementById("back-3").addEventListener("click", () => showStep(step2, step3));
document.getElementById("restart").addEventListener("click", restartForm);

// ==============================
// Step Show/Hide Helper
// ==============================
function showStep(stepToShow, stepToHide) {
    stepToHide.classList.add("hidden");
    stepToShow.classList.remove("hidden");
}


function validateStep1() {
    const name = nameInput.value.trim();

    if (name === "") {
        nameErr.textContent = "Name is required!";
        return;
    }

    nameErr.textContent = "";
    showStep(step2, step1);
}

function validateStep2() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailErr.textContent = "Enter a valid email!";
        return;
    }

    emailErr.textContent = "";
    showStep(step3, step2);
}


function validateStep3() {
    const pass = passInput.value.trim();

    if (pass.length < 6) {
        passErr.textContent = "Password must be at least 6 characters!";
        return;
    }

    passErr.textContent = "";
    showSummary();
}


function showSummary() {
    step3.classList.add("hidden");
    summaryStep.classList.remove("hidden");

    document.getElementById("summary-text").innerHTML = `
        <strong>Name:</strong> ${nameInput.value} <br>
        <strong>Email:</strong> ${emailInput.value} <br>
        <strong>Password:</strong> ${passInput.value}
    `;
}


function restartForm() {
    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";

    summaryStep.classList.add("hidden");
    step1.classList.remove("hidden");
}
