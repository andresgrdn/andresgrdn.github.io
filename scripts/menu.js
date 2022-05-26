/**
 * Open menu button section
 */

// Listener that makes the things
function openMenu() {
  // Hidding portafolio view
  //  Getting the portafolio view
  const portafolioView = document.getElementById("portafolioView");
  
  //  Seetting the class hidden to the portafolio view
  portafolioView.classList.toggle("hidden");

  
  // Showing menu view
  //  Getting the menu view
  const menuView = document.getElementById("menuView");

  //  Deleting the class hidden from the menu view
  menuView.classList.toggle("hidden");
}

// Getting the button
const menuButtonPortafolio = document.getElementById('menu-button-portafolio');

// Setting the listener
menuButtonPortafolio.addEventListener('click', openMenu);


/**
 * Closed menu button section
 */

// Listener that makes the things
function closeMenu() {
  // Hidding menu view
  //  Getting the menu view
  const menuView = document.getElementById("menuView");
  
  //  Setting the class hidden from the menu view
  menuView.classList.toggle("hidden");
  
  
  // Showing portafolio view
  //  Getting the portafolio view
  const portafolioView = document.getElementById("portafolioView");
  
  //  Deleting the class hidden to the portafolio view
  portafolioView.classList.toggle("hidden");
}

// Getting the button
const menuButtonMenu = document.getElementById('menu-button-menu');

// Setting the listener
menuButtonMenu.addEventListener('click', closeMenu);