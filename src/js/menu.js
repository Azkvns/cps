let menuBtn = document.querySelector('.main-btn--menu');
let closeMenuBtn = document.querySelector('.main-btn--close');
let menuBlock = document.querySelector('.menu');
let containerInner = document.querySelector('.container__inner');
let container = document.querySelector('.container');

function openMenu() {
    if (menuBlock.classList.contains('menu--opened')) return;
    menuBlock.classList.toggle('menu--hidden');
    setTimeout(function() { menuBlock.classList.toggle('menu--opened'); }, 0);
    containerInner.classList.toggle('container__inner--lightening');
    container.style.overflow = "hidden";
}

export function closeMenu() {
    if (menuBlock.classList.contains('menu--hidden')) return;
    containerInner.classList.toggle('container__inner--lightening');
    menuBlock.classList.toggle('menu--opened');
    setTimeout(function() { menuBlock.classList.toggle('menu--hidden'); }, 300);
    container.removeAttribute('style');
}

export default function menu() {
    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    containerInner.addEventListener('mouseup', closeMenu);
}