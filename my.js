///light and dark mode

document.querySelector(".checkbox").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const menuButton = document.querySelector(".menu");
const navBar = document.querySelector(".head-nav");
const head = document.querySelector(".h1-manager");
const backChange = document.querySelector(".backgroundChange");

menuButton.addEventListener("click", () => {
  if (navBar.classList.contains("show-nav")) {
    // close the menu
    menuButton.innerHTML = "☰";
    navBar.classList.remove("show-nav");
    backChange.classList.remove("hide-backChange");
    head.classList.remove("hide-logo");
  } else {
    // open the menu
    menuButton.innerHTML = "✕";
    backChange.classList.toggle("hide-backChange");
    head.classList.add("hide-logo");
    navBar.classList.add("show-nav");
  }
});

// text animation
const textElement = document.getElementById("about-text");
const text = textElement.innerText.split(" ");
textElement.innerText = "";

let index = 0;
document.addEventListener("DOMContentLoaded", () => {
  function showNextWord() {
    if (index < text.length) {
      textElement.innerText += " " + text[index] + " ";
      index++;
      setTimeout(showNextWord, 250); // add a 1-second delay before showing the next word
    }
  }

  showNextWord();
});

// carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    // stagePadding: 70,
    nav: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
