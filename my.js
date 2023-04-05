///light and dark mode

document.querySelector(".backgroundChange").addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    document.querySelector(".backgroundChange").innerHTML = "Dark🌙";
  } else {
    document.querySelector(".backgroundChange").innerHTML = "Light🌞";
  }
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
// gsap.registerPlugin(SplitText);

// let timeline = gsap.timeline();
// let mySplitText = new SplitText("#about-text", { type: "words, chars" });
// let myChars = mySplitText.chars;

// document.addEventListener("DOMContentLoaded", () => {
//   gsap.set("#about-text", { perspective: 400 });

//   timeline.from(myChars, {
//     duration: 0.8,
//     opacity: 0,
//     scale: 0,
//     y: 80,
//     rotationX: 180,
//     transformOrigin: "0% 50% -50",
//     ease: "back",
//     stagger: 0.01,
//   });
// });

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
