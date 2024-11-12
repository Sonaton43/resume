document.addEventListener("DOMContentLoaded", function () {
  const barIcon = document.querySelector(".my-bars");
  const xIcon = document.querySelector(".x-icon");
  const fullscreenNav = document.querySelector(".fullscreen-nav");

  barIcon.addEventListener("click", function () {
      if (fullscreenNav.classList.contains("active")) {

          fullscreenNav.classList.add("out");

          setTimeout(() => {
              fullscreenNav.classList.remove("active", "out");
          }, 300); 
      } else {
          fullscreenNav.classList.add("active");
      }
  });
  xIcon.addEventListener("click", function () {

      fullscreenNav.classList.add("out");

      setTimeout(() => {
          fullscreenNav.classList.remove("active");
          fullscreenNav.classList.remove("out");
      }, 300);
  });
});

window.onload = function() {
  const typed = new Typed('.multiple-text', {
      strings: ['Backend Developer', 'Frontend Developer', 'Illustrator Designer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
  });
};