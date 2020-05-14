function toggleItemsStyle(arr, changeClass) {
    for (let item of arr) {
        if (window.getComputedStyle(item).position === 'absolute') {
            item.children[0].tabIndex = -1;
            if (changeClass) item.classList.add('services__item--visible');
        } else {
            item.children[0].tabIndex = 0;
            if (changeClass) item.classList.remove('services__item--visible');
        }
    }
};

let servicesItems = document.querySelector('.services__list').children;
toggleItemsStyle(servicesItems, false);

window.matchMedia('(min-width: 768px) and (max-width: 1119px),').addEventListener('change', function(evt) {
    toggleItemsStyle(servicesItems, false);
});

let buttonMore = document.querySelector('.button-more');
const buttonMoreDefaultText = buttonMore.textContent;

buttonMore.addEventListener('click', function() {
    if (buttonMore.classList.toggle('button-more--active')) {
        buttonMore.textContent = buttonMore.dataset.another_text;
        toggleItemsStyle(servicesItems, true);
    } else {
        buttonMore.textContent = buttonMoreDefaultText;
        toggleItemsStyle(servicesItems, true);
    }
});