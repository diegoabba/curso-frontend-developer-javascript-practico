
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnShopingCart = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

/*-------------------------navbar---------------------------*/

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
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

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

/*----------------------product cards-----------------------*/

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

const productList = [];
productList.push({
  name: 'Bici',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Compu',
  price: 520,
  image: 'https://img.freepik.com/foto-gratis/portatil-pantalla-blanco_1205-112.jpg?1&w=1380&t=st=1659495938~exp=1659496538~hmac=77e8f93035d24a8cab8530dc24da022d982aa7b463e98d8fe77d3d392ff6166f'
})
productList.push({
  name: 'Pantalla',
  price: 318,
  image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Patines',
  price: 318,
  image: 'https://images.pexels.com/photos/8413747/pexels-photo-8413747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Patines',
  price: 318,
  image: 'https://images.pexels.com/photos/8413747/pexels-photo-8413747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Patines',
  price: 318,
  image: 'https://images.pexels.com/photos/8413747/pexels-photo-8413747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Patines',
  price: 318,
  image: 'https://images.pexels.com/photos/8413747/pexels-photo-8413747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function createCard(arr){
  for (product of arr) {     
    
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    cardsContainer.appendChild(productCard);

    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('alt', product.name);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    const emptyDiv = document.createElement('div'); 
    productInfo.appendChild(emptyDiv);
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    emptyDiv.appendChild(productPrice);
    emptyDiv.appendChild(productName);
    
    const productFigure = document.createElement('figure');
    productInfo.appendChild(productFigure);
    
    const productAddToCart = document.createElement('img');
    productAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');  
    productFigure.appendChild(productAddToCart)
  }
}

createCard(productList);
