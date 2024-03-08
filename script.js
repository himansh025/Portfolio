document.querySelector("#dynamic-content").innerText =
 "This paragraph is dynamically rendered using JavaScript";
 
 function scrollToSection(sectionId) {
    const section = document.getEle
    mentById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  function spin() {
    document.getElementById("discord").classList.add("fa-spin");
  }
  function spin1() {
    document.getElementById("telegram").classList.add("fa-spin");
  }
  function spin3() {
    document.getElementById("github").classList.add("fa-spin");
  }


// Sticky Navbar
  let header = document.querySelector('header');
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');


  window.addEventListener('scroll', () => {
      header.classList.toggle('shadow', window.scrollY > 0);
  });

  menu.onclick = () => {
      navbar.classList.toggle('active');
  }
  window.onscroll = () => {
      navbar.classList.remove('active');
  }

  // Dark Mode
  let darkmode = document.querySelector('#darkmode');

  darkmode.onclick = () => {
      if (darkmode.classList.contains('bx-moon')) {
          darkmode.classList.replace('bx-moon', 'bx-sun');
          document.body.classList.add('active');
      } else {
          darkmode.classList.replace('bx-sun', 'bx-moon');
          document.body.classList.remove('active');
      }
  }
    var typed = new Typed('#element', {
      strings: ['web develpor.', '&amp;vdgdv.'],
      typeSpeed: 50,
    });
 
