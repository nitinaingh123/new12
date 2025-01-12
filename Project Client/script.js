  // Add shadow on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  AOS.init({
    duration: 1200, // Animation duration
    once: true,    // Only animate once
  });

 
  
