let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".menu").classList.toggle("responsive");
}