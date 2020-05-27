import { repairTabIndex } from '../content/section/services/services';

let modalFeedback = document.querySelector('.modal--feedback');
let modalCall = document.querySelector('.modal--call');
let feedbackBtns = document.querySelectorAll('.top-btn--feedback');
let callBtns = document.querySelectorAll('.top-btn--call');
let closeBtns = document.querySelectorAll('.modal__top-btn--close');
let containerInner = document.querySelector('.container__inner');
let container = document.querySelector('.container');
let menu = document.querySelector('.menu');

function makeSilence(elem, self) {
    if (elem === self) return;
    elem.classList.add('unselect');
    elem.tabIndex = -1;
    if (!elem.children) return;
    for (let child of elem.children) {
        makeSilence(child, self);
    }
}

function dropSilence(elem) {
    elem.classList.remove('unselect');
    elem.removeAttribute('tabindex');
    if (!elem.children) return;
    for (let child of elem.children) {
        dropSilence(child);
    }
}

function openModal(modal) {
    return function() {
        modal.classList.remove('modal--hidden');
        modal.animate([
            { transform: 'translateX(100%)' },
            { transform: 'translateX(0)' }
        ], 100);
        menu.classList.add('modal--lightening');
        containerInner.classList.add('container__inner--lightening');
        for (let child of container.children) {
            makeSilence(child, modal);
        }
    }
}


function closeModal(modal) {
    return function() {
        if (modal.classList.contains('modal--hidden')) return;
        menu.classList.remove('modal--lightening');
        containerInner.classList.remove('container__inner--lightening');
        let animation = modal.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(100%)' }
        ], 100);
        animation.addEventListener('finish', function() {
            modal.classList.add('modal--hidden');
        })
        dropSilence(container);
        repairTabIndex();
    }
}

export default function modal() {
    for (let feedbackBtn of feedbackBtns) {
        feedbackBtn.addEventListener('click', openModal(modalFeedback));
    }
    for (let callBtn of callBtns) {
        callBtn.addEventListener('click', openModal(modalCall));
    }
    for (let closeBtn of closeBtns) {
        closeBtn.addEventListener('click', closeModal(closeBtn.parentElement));
    }
    containerInner.addEventListener('mouseup', function() {
        for (let modal of[modalFeedback, modalCall]) {
            closeModal(modal)();
        }
    });
    menu.addEventListener('mouseup', function() {
        for (let modal of[modalFeedback, modalCall]) {
            closeModal(modal)();
        }
    });
}