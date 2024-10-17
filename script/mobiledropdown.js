const button = document.getElementById("opennav");
const dropdown = document.getElementById("dropdown");
var statuscheck = 0;

button.addEventListener("click", openNavigation);

function openNavigation() {
  console.log(statuscheck);
  if (statuscheck === 0) {
    dropdown.style.display = "block";
    statuscheck = 1;
    button.src = "./img/menu-cross.png";
    document.body.classList.add("stopscroll");
  } else if (statuscheck === 1) {
    dropdown.style.display = "none";
    statuscheck = 0;
    document.body.classList.remove("stopscroll");
    button.src = "./img/Menu.png";
  }
}
