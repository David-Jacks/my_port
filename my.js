///light and dark mode

document.querySelector(".backgroundChange").addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    document.querySelector(".backgroundChange").innerHTML = "Dark🌙";
  } else {
    document.querySelector(".backgroundChange").innerHTML = "Light🌞";
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
