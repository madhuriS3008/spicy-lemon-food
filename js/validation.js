let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let errorMsg = document.getElementById("error_msg");

function validate() {
  if (password.value == confirmPassword.value) return;
  else errorMsg.innerText = "Paswords does not match";
}

let showPassword = document.getElementById("show");
function showWord() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
showPassword.addEventListener("click", showWord);

confirmPassword.addEventListener("blur", validate);
