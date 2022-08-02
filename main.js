const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnShopingCart = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
btnMobileMenu.addEventListener('click', toggleMobileMenu);
btnShopingCart.addEventListener('click', toggleShoppingCartAside);

function toggleDesktopMenu() {
  const isAsideShoppingCartOpen = !asideShoppingCart.classList.contains('inactive');
  if(isAsideShoppingCartOpen) {
    asideShoppingCart.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() { 
  const isAsideShoppingCartOpen = !asideShoppingCart.classList.contains('inactive');
  if(isAsideShoppingCartOpen) {
    asideShoppingCart.classList.add('inactive');
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if(isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
  }
  if(isMobileMenuOpen) {
    isDesktopMenuOpen.classList.add('inactive');
  }

  asideShoppingCart.classList.toggle('inactive');
}