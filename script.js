"use strict";
const navDailog = document.getElementById("nav-dailog");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
function handleMenu() {
  navDailog.classList.toggle("top-[4rem]");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
}
openMenu.addEventListener("click", handleMenu);
closeMenu.addEventListener("click", handleMenu);