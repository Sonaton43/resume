
document.addEventListener("DOMContentLoaded", function () {
    const barIcon = document.querySelector(".my-bars"); // Selector for the menu icon
    const navMenu = document.querySelector(".header-nav ul"); // Selector for the nav menu

    // Toggle function for the nav menu
    barIcon.addEventListener("click", function () {
        // Check if navMenu is already active
        if (navMenu.classList.contains("active")) {
            navMenu.classList.add("out"); // Add exit transition effect

            // Remove the active and out classes after the transition ends
            setTimeout(() => {
                navMenu.classList.remove("active", "out");
            }, 300); // Matches CSS transition duration
        } else {
            navMenu.classList.add("active"); // Activate the menu
        }
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
  const typed2 = new Typed('.multiple-text-2', {
    strings: ['User Friendly System', 'Unique Design', 'Workable System'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
};

document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".skill-circle");
    circles.forEach(circle => {
        const percentage = circle.getAttribute("data-percentage");
        circle.style.setProperty("--percentage", `${(percentage / 100) * 360}deg`);
    });
});

// Select sections and nav links correctly
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header-nav ul li a');

// Function to handle scrolling to sections with offset
function scrollToSection(event) {
    event.preventDefault(); // Prevent default anchor behavior
    let targetId = event.currentTarget.getAttribute('href').substring(1); // Get section ID without '#'
    let targetSection = document.getElementById(targetId);

    // Calculate the offset position with a slight adjustment for padding
    let offsetPosition = targetSection.offsetTop - 78; // Increase padding slightly

    // Scroll to the position
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Attach the scrollToSection function to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

window.onscroll = function() {
    let top = window.scrollY;

    // Adjust the logic to check for the topmost section
    if (top === 0) {
        // If we are at the very top, make sure only the home link is active
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('.header-nav ul li a[href="#Home"]').classList.add('active');
    } else {
        sections.forEach(function(sec) {
            let offset = sec.offsetTop - 78; // Use the same padding as above
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            // Check if the section is currently in view
            if (top >= offset && top < offset + height) {
                // Remove active class from all links
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // Add active class to the current section's link
                let activeLink = document.querySelector('.header-nav ul li a[href="#' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
};


document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content h3,.services-top', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container,.experience-row,.services-bottom,.input-bottom', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1,.about-img,.portfolio-items1,.skills-part,.services-left', { origin: 'left' });
    ScrollReveal().reveal('.home-content p,.about-full-text,.portfolio-items2,.skills-row,.services-right', { origin: 'right' });
});