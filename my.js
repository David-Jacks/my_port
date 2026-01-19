///light and dark mode

// theme toggle is handled on DOMContentLoaded to ensure element exists

// set current year in footer
function setCurrentYear() {
  var el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

// const menuButton = document.querySelector(".menu");
// const navBar = document.querySelector(".head-nav");
// const head = document.querySelector(".h1-manager");
// const backChange = document.querySelector(".backgroundChange");

// menuButton.addEventListener("click", () => {
//   if (navBar.classList.contains("show-nav")) {
//     // close the menu
//     menuButton.innerHTML = "☰";
//     navBar.classList.remove("show-nav");
//     backChange.classList.remove("hide-backChange");
//     head.classList.remove("hide-logo");
//   } else {
//     // open the menu
//     menuButton.innerHTML = "✕";
//     backChange.classList.toggle("hide-backChange");
//     head.classList.add("hide-logo");
//     navBar.classList.add("show-nav");
//   }
// });

// text animation
// const textElement = document.getElementById("about-text");
// const text = textElement.innerText.split(" ");
// textElement.innerText = "";

// let index = 0;
// document.addEventListener("DOMContentLoaded", () => {
//   function showNextWord() {
//     if (index < text.length) {
//       textElement.innerText += " " + text[index] + " ";
//       index++;
//       setTimeout(showNextWord, 250); // add a 1-second delay before showing the next word
//     }
//   }

//   showNextWord();
// });

// contact section swap
document.addEventListener("DOMContentLoaded", () => {
  // theme toggle: sync body class with checkbox state and listen for changes
  const themeToggle = document.getElementById('checkbox') || document.querySelector('.checkbox');
  if (themeToggle) {
    const applyTheme = (checked) => {
      if (checked) document.body.classList.add('light');
      else document.body.classList.remove('light');
    };
    // initialize theme based on current checkbox state
    applyTheme(themeToggle.checked);
    // update on user interaction
    themeToggle.addEventListener('change', (e) => applyTheme(e.target.checked));
  }
  // contact flip: CSS-only checkbox pattern — keep focus support on change
  const contactCheckbox = document.getElementById('contact-flip');
  if (contactCheckbox) {
    contactCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        const first = document.querySelector('.cont__form input, .cont__form textarea');
        if (first) setTimeout(() => first.focus(), 420);
      }
    });
  }

  // Escape should close any flip (checkbox or class)
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      if(contactCheckbox) contactCheckbox.checked = false;
      const fc = document.querySelector('.flip-card');
      if(fc) fc.classList.remove('is-flipped');
      const fi = document.getElementById('flipCardInner');
      if(fi) fi.classList.remove('is-flipped');
    }
  });
  // call year setter when DOM is ready
  setCurrentYear();

  // --- projects dynamic render ---
  const projectsData = [
    {
      id: 'club-online',
      title: 'Club Online',
      desc: 'A club management system to help manage member details and attendance',
      url: 'https://christianclubonline.netlify.app/',
      color: '#FF8811',
      // small inline SVG icon (keeps assets local, lightweight)
      svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21,4.93h0L12.32,2.05a1,1,0,0,0-.61,0l-9,2.75A1,1,0,0,0,2,5.57V9H5V17H3a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V18H19V10.07h2V6A1.07,1.07,0,0,0,21,4.93Z"/></svg>'
    },
    {
      id: 'fastconnect',
      title: 'Fastconnect',
      desc: 'An intranet media for organizations to manage internal affairs, built with React and Express',
      url: 'https://fastconnect-897e0.firebaseapp.com/',
      color: '#e7c324',
      svg: '<svg viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380,140V20h-20V0H240v20H140V0H20v20H0v120h20v100H0v120h20v20h120v-20h100v20h120v-20h20V240h-20V140Z"/></svg>'
    },
    {
      id: 'scholarscribe',
      title: 'ScholarScribe',
      desc: 'Educational web app for Lancaster University Ghana Creative Society, built with React and Redux',
      url: 'https://master--schorlarscribe.netlify.app/',
      color: '#8dcf13',
      svg: '<svg viewBox="0 0 491 491" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M471 368h-40v-52l55-55c8-8 8-21 0-29L441 177V124h40c11 0 20-9 20-20V23c0-11-9-20-20-20H348c-11 0-20 9-20 20v61c0 11 9 20 20 20h40v53l-49 49H151l-49-49v-43l24 9c10 4 22-1 26-11L174 56c4-10-1-22-11-26L50 1C40-3 28 3 24 14L1 70c-4 10 1 22 11 26l48 19v59L6 231c-8 8-8 21 0 29l55 55v38l-10-4c-10-4-22 1-26 11L1 418c-4 10 1 22 11 26l114 44c10 4 22-1 26-11l22-57c4-10-1-22-11-26l-62-24v-54l49-49h187l49 49v53H348c-11 0-20 9-20 20v61c0 11 9 20 20 20h123c11 0 20-9 20-20v-61c0-11-9-20-20-20z"/></svg>'
    }
  ];

  function renderProjects(containerId, data){
    const container = document.getElementById(containerId);
    if(!container) return;
    const tpl = document.getElementById('project-card-tpl');
    data.forEach((p, idx) => {
      const node = tpl.content.cloneNode(true);
      const article = node.querySelector('.project-card');
      const media = node.querySelector('.pc-media');
      const title = node.querySelector('.pc-title');
      const desc = node.querySelector('.pc-desc');
      const link = node.querySelector('.pc-link');
      article.style.setProperty('--accent', p.color || 'var(--regular-head)');
      media.innerHTML = p.svg || '';
      title.textContent = p.title;
      desc.textContent = p.desc;
      link.href = p.url;
      link.textContent = 'Visit';
      // set reveal delay for subtle stagger
      article.style.transitionDelay = (idx * 80) + 'ms';
      container.appendChild(article);
    });

    // reveal via IntersectionObserver
    const cards = container.querySelectorAll('.project-card');
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if(en.isIntersecting){
          en.target.classList.add('revealed');
          obs.unobserve(en.target);
        }
      });
    }, {threshold: 0.15});
    cards.forEach(c => io.observe(c));
  }

  // render now
  renderProjects('projects-grid', projectsData);
});


