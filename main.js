const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);
btnMobileMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {  
  mobileMenu.classList.toggle('inactive');
}