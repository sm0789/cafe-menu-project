// get the form and input elements from html
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formStatus = document.getElementById("form-status");

// gets error message elements too
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

// this function validates the input
const validateInput = (input, errorElement, message) => {
  if (input.value.trim() === "") {
    errorElement.textContent = message; //if field is empty then show user the message
    return false;
  } else {
    errorElement.textContent = ""; //if field is not empty then no message
    return true;
  }
};

// Form submission handler listens for user clicking submit
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); //stops it automatically refreshing the page

  // Validate inputs
  const isNameValid = validateInput(nameInput, nameError, "Name is required.");
  const isEmailValid = validateInput(
    emailInput,
    emailError,
    "Email is required."
  );
  const isMessageValid = validateInput(
    messageInput,
    messageError,
    "Message is required."
  );

  // Check if all inputs are valid
  if (isNameValid && isEmailValid && isMessageValid) {
    formStatus.textContent = "Thank you!"; //sets the text for form-status p
    formStatus.style.color = "green";
    contactForm.reset(); // Clear the form
  } else {
    formStatus.textContent = "Please fill out all fields correctly."; //sets the text for form-status p
    formStatus.style.color = "red";
  }
});
