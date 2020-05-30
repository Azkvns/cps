import { closeMenu } from './menu';
// 
let modalFeedback = document.querySelector('.modal--feedback');
let modalCall = document.querySelector('.modal--call');
let feedbackBtns = document.querySelectorAll('.main-btn--feedback');
let callBtns = document.querySelectorAll('.main-btn--call');
let closeBtns = document.querySelectorAll('.modal__main-btn--close');
let containerInner = document.querySelector('.container__inner');
let container = document.querySelector('.container');
let menu = document.querySelector('.menu');
let menuIsOpened = false;

function openModal(modal, btn) {
    return function() {
        if (modal.classList.contains('modal--opened')) return;
        if (menuIsOpened) return;
        // btn.setAttribute('disabled', '');
        setTimeout(function() {}, 10);
        window.scrollBy(0, document.documentElement.scrollTop * -1);
        modal.classList.remove('modal--hidden');
        setTimeout(function() { modal.classList.add('modal--opened'); }, 0);
        menu.classList.remove('menu--opened');
        setTimeout(function() { menu.classList.add('menu--hidden'); }, 300);
        menu.classList.add('modal--lightening');
        containerInner.classList.add('container__inner--lightening');
        container.style.overflow = 'hidden';
        setTimeout(function() {
            // btn.removeAttribute('disabled');
            menuIsOpened = true;
        }, 600);
    }
}


function closeModal(modal, btn) {
    return function() {
        if (modal.classList.contains('modal--hidden')) return;
        if (!menuIsOpened) return;
        // btn.setAttribute('disabled', '');
        modal.classList.remove('modal--opened');
        setTimeout(function() { modal.classList.add('modal--hidden'); }, 300);
        modal.classList.remove('modal--hidden');
        menu.classList.remove('modal--lightening');
        containerInner.classList.remove('container__inner--lightening');
        container.removeAttribute('style');
        setTimeout(function() {
            // btn.removeAttribute('disabled');
            menuIsOpened = false;
        }, 600);
    }
}

export default function modal() {
    for (let feedbackBtn of feedbackBtns) {
        feedbackBtn.addEventListener('click', openModal(modalFeedback, feedbackBtn));
    }
    for (let callBtn of callBtns) {
        callBtn.addEventListener('click', openModal(modalCall, callBtn));
    }
    for (let closeBtn of closeBtns) {
        closeBtn.addEventListener('click', closeModal(closeBtn.parentElement, closeBtn));
    }
    containerInner.addEventListener('mouseup', function() {
        for (let modal of[modalFeedback, modalCall]) {
            closeModal(modal, containerInner)();
        }
    });
    menu.addEventListener('mouseup', function() {
        for (let modal of[modalFeedback, modalCall]) {
            closeModal(modal, menu)();
        }
    });
}