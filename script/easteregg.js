var heightwindow = window.innerHeight; // Retrieve the height of the browser window
var widthwindow = window.innerWidth; // Retrieve the width of the browser window

var nbrparticule = 150; // Number of particles to be created
var start = 1; // Starting position of the particles
var vy = []; // Array to store vertical velocity of each particle
var vx = []; // Array to store horizontal velocity of each particle
var rebond = 0; // Number of times a particle has rebounded
var particule = []; // Array to store references to the particle elements in HTML
var posy = []; // Array to store current vertical position of each particle
var posx = [234]; // Array to store current horizontal position of each particle
var rebond = []; // Array to store the number of rebounds for each particle
var leftorright = 0; // Random value representing left or right direction for particles

var main = document.getElementById("main");
var image = document.getElementById("weldasbackgroundimagedesktop");
var image2 = document.getElementById("weldasbackgroundimage");

image.addEventListener("click", function () {
  for (var i = 1; i < nbrparticule; i++) {
    main.innerHTML += '<div class="particule" id="particule' + i + '"></div>';
  }

  for (var i = 1; i < nbrparticule; i++) {
    particule[i] = document.getElementById("particule" + i);
    posy[i] = start;
    posx[i] = widthwindow / 2;
    vy[i] = Math.random() * (3 - 1) + 1;
    vy[i] = 0 - vy[i];
    vx[i] = Math.random() * (2 - 0) + 0;
    rebond[i] = 1;
    leftorright = Math.round(Math.random() * (1 - 0));
    if (leftorright == 0) {
      vx[i] = 0 - vx[i];
    }
  }

  var intervalId = setInterval(function () {
    for (var i = 1; i < nbrparticule; i++) {
      particule[i].style.top = posy[i] + "px";
      particule[i].style.left = posx[i] + "px";
      if (rebond[i] == 0) {
        particule[i].style.height = vy[i] * 3 + "px";
      } else {
        particule[i].style.height = 5 + "px";
      }
      posy[i] = posy[i] + vy[i];
      posx[i] = posx[i] + vx[i];
      vy[i] = vy[i] + 0.1;
      if (vx[i] > 0) {
        vx[i] = vx[i] - 0.01;
      }
      if (posy[i] > heightwindow) {
        if (rebond[i] < 2) {
          vy[i] = vy[i] / Math.round(Math.random() * (4 - 2) + 2);
          vy[i] = 0 - vy[i];
          rebond[i]++;
          posy[i] = heightwindow - 5;
        } else {
          posy[i] = start;
          posx[i] = widthwindow / 2;
          vy[i] = Math.random() * (3 - 1) + 1;
          vy[i] = 0 - vy[i];
          rebond[i] = 0;
          vx[i] = Math.random() * (2 - 0) + 0;
          leftorright = Math.round(Math.random() * (1 - 0));
          if (leftorright == 0) {
            vx[i] = 0 - vx[i];
          }
        }
      }
    }
  }, 10);

  // Stop the animation after 9 seconds
  setTimeout(function () {
    var opacity = 1;
    var fadeIntervalId = setInterval(function () {
      opacity -= 0.1;
      main.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(fadeIntervalId);
        main.innerHTML = "";
        main.style.opacity = 1;
      }
    }, 100);
  }, 9000);
});



if (document.documentElement.clientWidth < 1100) {
  
image2.addEventListener("click", function () {
  for (var i = 1; i < nbrparticule; i++) {
    main.innerHTML += '<div class="particule" id="particule' + i + '"></div>';
  }

  for (var i = 1; i < nbrparticule; i++) {
    particule[i] = document.getElementById("particule" + i);
    posy[i] = start;
    posx[i] = widthwindow / 2;
    vy[i] = Math.random() * (3 - 1) + 1;
    vy[i] = 0 - vy[i];
    vx[i] = Math.random() * (2 - 0) + 0;
    rebond[i] = 1;
    leftorright = Math.round(Math.random() * (1 - 0));
    if (leftorright == 0) {
      vx[i] = 0 - vx[i];
    }
  }

  var intervalId = setInterval(function () {
    for (var i = 1; i < nbrparticule; i++) {
      particule[i].style.top = posy[i] + "px";
      particule[i].style.left = posx[i] + "px";
      if (rebond[i] == 0) {
        particule[i].style.height = vy[i] * 3 + "px";
      } else {
        particule[i].style.height = 5 + "px";
      }
      posy[i] = posy[i] + vy[i];
      posx[i] = posx[i] + vx[i];
      vy[i] = vy[i] + 0.1;
      if (vx[i] > 0) {
        vx[i] = vx[i] - 0.01;
      }
      if (posy[i] > heightwindow) {
        if (rebond[i] < 2) {
          vy[i] = vy[i] / Math.round(Math.random() * (4 - 2) + 2);
          vy[i] = 0 - vy[i];
          rebond[i]++;
          posy[i] = heightwindow - 5;
        } else {
          posy[i] = start;
          posx[i] = widthwindow / 2;
          vy[i] = Math.random() * (3 - 1) + 1;
          vy[i] = 0 - vy[i];
          rebond[i] = 0;
          vx[i] = Math.random() * (2 - 0) + 0;
          leftorright = Math.round(Math.random() * (1 - 0));
          if (leftorright == 0) {
            vx[i] = 0 - vx[i];
          }
        }
      }
    }
  }, 10);

  // Stop the animation after 9 seconds
  setTimeout(function () {
    var opacity = 1;
    var fadeIntervalId = setInterval(function () {
      opacity -= 0.1;
      main.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(fadeIntervalId);
        main.innerHTML = "";
        main.style.opacity = 1;
      }
    }, 100);
  }, 9000);
});
}