const menuButtonPortfolio = document.getElementById('menu-button-portfolio');
const menuButtonMenu = document.getElementById('menu-button-menu');
const menuView = document.getElementById("menuView");

menuButtonPortfolio.addEventListener('click', openMenu);
menuButtonMenu.addEventListener('click', closeMenu);

function openMenu() {
  menuView.classList.toggle("change-menu-width");
}
function closeMenu() {
  menuView.classList.toggle("change-menu-width");
}