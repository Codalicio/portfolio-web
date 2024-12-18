// JAVASCRIPT CODE(script.js) FOR MAIN(index.html) :

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  });
  