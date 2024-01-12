let form = document.querySelector("#login_form");

function submitForm(e) {
  e.preventDefault();
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");

  alert("This form has been successfully submitted!");
  console.log(
    `This form has a username of ${username.value} and password of ${password.value}`
  );
  window.location.href = "http://127.0.0.1:5500/index.html";
}

form.addEventListener("submit", submitForm);
