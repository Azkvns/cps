import { repairTabIndex } from '../content/section/services/services';
// 
let menuBtn = document.querySelector('.top-btn--menu');
let closeMenuBtn = document.querySelector('.top-btn--close');
let menuBlock = document.querySelector('.menu');
let containerInner = document.querySelector('.container__inner');
let container = document.querySelector('.container');


function makeSilence(elem, self) {
    if (elem === self) return;
    elem.tabIndex = -1;
    elem.classList.add('unselect')
    if (!elem.children) return;
    for (let child of elem.children) {
        makeSilence(child, self);
    }
}

function dropSilence(elem) {
    elem.removeAttribute('tabindex');
    elem.classList.remove('unselect')
    if (!elem.children) return;
    for (let child of elem.children) {
        dropSilence(child);
    }
    repairTabIndex();
}

function openMenu() {
    menuBlock.classList.remove('menu--hidden');
    menuBlock.animate([
        { transform: 'translateX(-100%)' },
        { transform: 'translateX(0)' }
    ], 100);
    containerInner.classList.add('container__inner--lightening');
    for (let elem of container.children) {
        makeSilence(elem, menuBlock);
    }
}

function closeMenu() {
    if (menuBlock.classList.contains('menu--hidden')) return;
    containerInner.classList.remove('container__inner--lightening');
    let animation = menuBlock.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' }
    ], 100);
    animation.addEventListener('finish', function() {
        menuBlock.classList.add('menu--hidden');
    })
    dropSilence(container);
}

export default function menu() {
    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    containerInner.addEventListener('mouseup', closeMenu);
}