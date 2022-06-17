const login = document.getElementById("login");

login.addEventListener("click", validate);

function validate(result) {
  result.preventDefault();
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  let valid = true;

  if (
    passwordField.value.length > 0 &&
    passwordField.value.length < 8 &&
    emailField.value.length > 0
  ) {
    const passError = document.getElementById("passError");
    passError.classList.add("visible");
    passwordField.classList.add("invalid");
    passError.setAttribute("aria-hidden", false);
    passError.setAttribute("aria-invalid", true);
  }
  return valid;
}
login.addEventListener("click", cheakpass);
function cheakpass(r) {
  r.preventDefault();

  const passwordField = document.getElementById("password");
  const emailField = document.getElementById("email");
  let val = true;

  if (
    passwordField.value.length >= 8 &&
    (passwordField.value != "john123456" ||
      emailField.value != "johndoe@example.com")
  ) {
    const wrongpass = document.getElementById("wrongpass");
    wrongpass.classList.add("visible");
    passwordField.classList.add("invalid");
    wrongpass.setAttribute("aria-hidden", false);
    wrongpass.setAttribute("aria-invalid", true);
  }
  return val;
}

login.addEventListener("click", cheak);
function cheak(o) {
  o.preventDefault();

  const passwordField = document.getElementById("password");
  const emailField = document.getElementById("email");
  let val = true;

  if (
    passwordField.value === "john123456" &&
    emailField.value === "johndoe@example.com"
  )
    alert("you have successfully loggedin");
  return val;
}
