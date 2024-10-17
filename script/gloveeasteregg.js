var timeoutId;
var checker = 0;
var currentcolor = 0;
const title = document.getElementById("title");
const block = document.getElementById("eastereggbox")
const image = document.getElementById("eastereggimage");
const applause = new Audio('./audio/applause.mp3');


title.addEventListener("click", start);

function start() { 
        clearInterval(intervalId);
        continueBlinking = false;
        block.style.display = "block";
        image.classList.add("move");
        applause.play();
        if (checker === 0) {
            setTimeout(function() {
                title.innerHTML = "AMAZING DEAL! USE CODE ''Weldas10'' FOR 10% OFF";
            }, 2000)
            checker = 1;
        }
        else if(checker === 1) {
            setTimeout(function() {
                title.innerHTML = "SOFTouch PigSkin Welding Gloves";
            }, 2000)
            checker = 0;
        }
        setTimeout( function() {
            image.classList.remove("move"); block.style.display = "none";}, 4000)
};

// Define a flag variable to keep track of whether to continue blinking or not
var continueBlinking = true;

// Define a function to blink the element
function blink() {
    title.style.color = '#009FDF';
    title.style.transition = '0s';
    title2.style.color = '#009FDF';
    title2.style.transition = '0s';
    setTimeout(function() {
        title.style.color = '#002F6C';
        title2.style.color = '#002F6C';
    }, 200);
}

// Call the blink function every 400 milliseconds
var intervalId = setInterval(blink, 400);

// Stop the blinking after 2 seconds
setTimeout(function() {
    clearInterval(intervalId);
    continueBlinking = false;
    // Restart the blinking after 5 seconds
    setTimeout(function() {
        continueBlinking = true;
        intervalId = setInterval(blink, 400);
    }, 5000);
}, 0);


