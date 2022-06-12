const menuButtonPortafolio = document.getElementById('menu-button-portafolio');
const menuButtonMenu = document.getElementById('menu-button-menu');


function openMenu() {
  const menuView = document.getElementById("menuView");

  menuView.classList.toggle("change-menu-width");
}
function closeMenu() {
  const menuView = document.getElementById("menuView");

  menuView.classList.toggle("change-menu-width");
}

menuButtonPortafolio.addEventListener('click', openMenu);
menuButtonMenu.addEventListener('click', closeMenu);