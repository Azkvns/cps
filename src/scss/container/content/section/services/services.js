let serviceItems = document.querySelectorAll('.services__item');
const screenMdBreakpoint = window.matchMedia('(min-width: 768px)');
const screenLmBreakpoint = window.matchMedia('(min-width: 1120px)');

function toggleTabIndex(items) {
    return function() {
        for (let item of items) {
            if (window.getComputedStyle(item).pointerEvents === 'none') {
                item.children[0].tabIndex = -1;
            } else {
                item.children[0].tabIndex = 0;
            }
        }
    }
}

let servicesButtons = document.querySelectorAll('.services__expand-btn');


function showAllItems(items) {
    return function() {
        for (let item of items) {
            item.classList.toggle('visually-visible');
        }
        toggleTabIndex(items)();
    }
}

export default function services() {
    screenMdBreakpoint.addListener(toggleTabIndex(serviceItems));
    screenLmBreakpoint.addListener(toggleTabIndex(serviceItems));
    toggleTabIndex(serviceItems)();
    // 
    for (let btn of servicesButtons) {
        let items = btn.parentElement.querySelectorAll('.services__list .services__item');
        btn.addEventListener('click', showAllItems(items));
    }
}