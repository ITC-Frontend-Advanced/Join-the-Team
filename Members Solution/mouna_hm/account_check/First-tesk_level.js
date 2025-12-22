
const form = document.getElementById("contactForm")
const username_input = document.getElementById("name")
const email_input = document.getElementById("email")
const usernameError = document.getElementById("p_username");
const emailError = document.getElementById("p_email");
const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;
function hideErrors() {
  usernameError.classList.remove("show");
  emailError.classList.remove("show");

}
function showError(element, message) {
  element.textContent = message;
  element.classList.add("show")
}
function validateUsername() {
  const username = username_input.value.trim();
  if (username === "") {
    showError(usernameError, "Username is required!");
    return false;
  }
  else if (username.length < 8) {
    showError(usernameError, "Username must be at least 8 characters long!");
    return false;
  }
  return true;
}

function validateEmail() {
  const email = email_input.value.trim();
  if (email === "") {
    showError(emailError, "Email is required!");
    return false;
  } else if (!emailPattern.test(email)) {
    showError(emailError, "Please enter a valid email ending with .com!");
    return false;
  }
  return true;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  hideErrors();

  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();

  if (isUsernameValid && isEmailValid) {
    alert(`Thank you, ${username_input.value}! Your form has been submitted.`);
    form.reset();
  }
});
