const sectionsAll = document.querySelector('section');
const header = document.querySelector('header');
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuMobile = document.querySelector('.menu-mobile');

window.addEventListener('scroll', () => {
    header.classList.toggle('effect', window.scrollY > 700)
})

menuHamburguer.addEventListener('click', () => {
    menuMobile.classList.add('mobile-mode');
})

function closemenu() {
    menuMobile.classList.remove('mobile-mode');
}