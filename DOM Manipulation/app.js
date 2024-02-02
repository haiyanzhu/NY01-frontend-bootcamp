const form =document.getElementById("myForm"); ;
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    // prevent form from submitting;
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
        //perform submission
        console.log("Form submitted successfully");
        form.reset();
        nameError.textContent = "";
        emailError.textContent = "";
    } else {


    }
    console.log(isValid);
}

//for input validation;
function validateForm() {
    // value: This property is used to get the current value entered or selected in the input element
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    let isValid = true;
    // ===check both the value and the type without performing type coercion;
    if (nameValue === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (emailValue === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    return isValid;
}





