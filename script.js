// ===========================
// MAANIA — script.js
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // ---- HAMBURGER MENU ----
  const hamburger = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');

  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navOverlay.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });

    // Close on link click
    navOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navOverlay.classList.remove('open');
        document.body.classList.remove('nav-open');
      });
    });

    // Close on overlay click (outside menu)
    navOverlay.addEventListener('click', (e) => {
      if (e.target === navOverlay) {
        hamburger.classList.remove('active');
        navOverlay.classList.remove('open');
        document.body.classList.remove('nav-open');
      }
    });
  }

  // ---- SCROLL REVEAL ----
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // ---- CONTACT FORM VALIDATION ----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Clear previous errors
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

      // Validate name
      const name = document.getElementById('name');
      if (name && name.value.trim().length < 2) {
        name.closest('.form-group').classList.add('error');
        valid = false;
      }

      // Validate phone
      const phone = document.getElementById('phone');
      if (phone && !/^[\d\s\+\-]{7,}$/.test(phone.value.trim())) {
        phone.closest('.form-group').classList.add('error');
        valid = false;
      }

      // Validate email (optional but if filled must be valid)
      const email = document.getElementById('email');
      if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.closest('.form-group').classList.add('error');
        valid = false;
      }

      // Validate message
      const message = document.getElementById('message');
      if (message && message.value.trim().length < 5) {
        message.closest('.form-group').classList.add('error');
        valid = false;
      }

      if (valid) {
        // Show success state
        form.style.display = 'none';
        const success = document.getElementById('formSuccess');
        if (success) success.style.display = 'block';
      }
    });
  }

  // ---- SMOOTH SCROLL for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- HEADER SCROLL SHADOW ----
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(45,125,111,0.15)';
      } else {
        header.style.boxShadow = '0 2px 8px rgba(45,125,111,0.08)';
      }
    });
  }

});
