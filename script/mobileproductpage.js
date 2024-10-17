const img1 = document.getElementById("productimage1mob");
const img2 = document.getElementById("productimage2mob");
const mainimg = document.getElementById("mainimgmobile")

img2.addEventListener("click", ToImg2);
img1.addEventListener("click", ToImg1);


function ToImg2 () {
    mainimg.src = "./img/gloveswithnrandheartmobile2.png"
    img1.classList.remove ("activeimage");
    img2.classList.add ("activeimage"); 
}
function ToImg1 () {
    mainimg.src = "./img/gloveswithnrandheartmobile.png"
    img2.classList.remove ("activeimage");
    img1.classList.add ("activeimage"); 
}



const title2 = document.getElementById("titlemob");
const imagedown = document.getElementById("eastereggimagemob");
var checker2 = 0;

title2.addEventListener("click", StartAnimation);

function StartAnimation () {
    imagedown.classList.add("movemobile");
    clearInterval(intervalId);
    continueBlinking = false;
    applause.play();
    if (checker2 === 0) {
        setTimeout(function() {
            title2.innerHTML = "AMAZING DEAL! USE CODE ''Weldas10'' FOR 10% OFF";
            clearInterval(intervalId);
            continueBlinking = false;
        }, 2800)
        checker2 = 1;
    }
    else if(checker2 === 1) {
        setTimeout(function() {
            title2.innerHTML = "SOFTouch PigSkin Welding Gloves";
            clearInterval(intervalId);
            continueBlinking = false;
        }, 2800)
        checker2 = 0;
    }
    setTimeout( function() {
        clearInterval(intervalId);
        continueBlinking = false;
        imagedown.classList.remove("movemobile");}, 4000)
}



