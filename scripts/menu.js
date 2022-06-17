const menuButtonPortafolio = document.getElementById('menu-button-portafolio');
const menuButtonMenu = document.getElementById('menu-button-menu');
const menuView = document.getElementById("menuView");


function openMenu() {
  menuView.classList.toggle("change-menu-width");
}
function closeMenu() {
  menuView.classList.toggle("change-menu-width");
}

menuButtonPortafolio.addEventListener('click', openMenu);
menuButtonMenu.addEventListener('click', closeMenu);