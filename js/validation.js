let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let errorMsg = document.getElementById("error_msg");

let birthDate = document.getElementById("birthday");
let birthMonth = document.getElementById("birth_month");

function validate() {
  if (password.value == confirmPassword.value) errorMsg.innerText = "";
  else errorMsg.innerText = "Paswords does not match";
}

function birthDateValues() {
  let mon = birthMonth.value;
  if (
    mon == "Jan" ||
    mon == "Mar" ||
    mon == "May" ||
    mon == "Jul" ||
    mon == "Aug" ||
    mon == "Oct" ||
    mon == "Dec"
  ) {
    birthDate.setAttribute("max", "31");
  } else if (mon == "Feb") {
    birthDate.setAttribute("max", "29");
  } else birthDate.setAttribute("max", "30");
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

birthMonth.addEventListener("change", birthDateValues);

confirmPassword.addEventListener("blur", validate);
password.addEventListener("blur", validate);
