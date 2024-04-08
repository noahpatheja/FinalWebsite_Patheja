document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("suggestion-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const suggestionInput = document.getElementById("suggestion");
    form.addEventListener("submit", function (event) {

    const errors = [];

    if (nameInput.value.length < 1) {
    errors.push("Please fill out required field.");
    }
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
    errors.push("Please enter a valid email address.");
    }
    
    if (passwordInput.value.length < 1) {
    errors.push("Please enter a suggestion. If you have no suggestion, please enter None.");
    }
   
    
    if (errors.length > 0) {
    event.preventDefault(); 
    alert(errors.join("\n")); 
    }
    });
    });