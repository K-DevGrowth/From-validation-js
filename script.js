const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errorMessages = document.querySelectorAll(".error");

inputs.forEach((input, index) => {
    input.style.borderColor = "black";
    
    input.addEventListener("input", () => {
        if (input.validity.valid) {
            errorMessages[index].style.display = "none";
            errorMessages[index].textContent = "";
            input.style.borderColor = "green";
        }
        else {
            showError(input, index);
        }
    })
})

form.addEventListener("submit", (e) => {
    inputs.forEach((input, index) => {
        if (!input.validity.valid) {
            showError(input, index);
            e.preventDefault();
        }
    })
})

const showError = (input, index) => {
    input.style.borderColor = "red";
    errorMessages[index].style.display = "block";

    if (input.validity.typeMismatch) {
        errorMessages[index].textContent = "Miss match";
    }
    else if (input.validity.valueMissing) {
        errorMessages[index].textContent = "Miss Value";
    }
    else if (input.validity.tooShort) {
        errorMessages[index].textContent = "Too Short (min length: 6)";
    }
    else {
        errorMessages[index].style.display = "none";
    }
}

errorMessages.forEach(msg => {
    msg.style.display = "none"; // reset
})