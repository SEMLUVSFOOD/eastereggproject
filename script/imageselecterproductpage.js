const MainImage = document.getElementById('productimagemain');
const FirstImage = document.getElementById('productimage1');
const SecondImage = document.getElementById('productimage2');

// MainImage.addEventListener("click", tester);
FirstImage.addEventListener("click", ChangeToFirst);
SecondImage.addEventListener("click", ChangeToSecond);

function tester (){
    alert("sadhasja");
}

function ChangeToSecond () {
    MainImage.src="./img/2ndimageselected.png";
    FirstImage.classList.remove("activeimage");
    SecondImage.classList.add("activeimage");
    SecondImage.style.cursor = 'default';
    FirstImage.style.cursor = "pointer";
    FirstImage.classList.add ("hovereffect");
    SecondImage.classList.remove ("hovereffect");
}

function ChangeToFirst () {
    MainImage.src="./img/gloveswithnrandheart.png";
    FirstImage.classList.add("activeimage");
    SecondImage.classList.remove("activeimage");
    FirstImage.style.cursor = 'default';
    SecondImage.style.cursor = "pointer";
    FirstImage.classList.remove ("hovereffect");
    SecondImage.classList.add ("hovereffect");
}