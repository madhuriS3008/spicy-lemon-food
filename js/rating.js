let rating = document.querySelector("#rating");
let stars = document.querySelector("#stars");

function changeHandler() {
  stars.innerHTML = "";
  for (let i = 1; i <= rating.value; i++) {
    let node = document.createElement("li");
    node.classList.add("fa-solid", "fa-star");
    stars.appendChild(node);
  }
}

rating.addEventListener("input", changeHandler);
