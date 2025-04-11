// script.js
window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = '#111827';
      } else {
        nav.style.backgroundColor = '#1f2937';
      }
    });
  });
  