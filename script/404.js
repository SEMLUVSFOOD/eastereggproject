const back = document.getElementById("back");

back.addEventListener("click", GoBack);

function GoBack () {
    history.back();
}