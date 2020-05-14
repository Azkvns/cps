function toggleItemsTabIndex(arr) {
    for (let item of arr) {
        if (window.getComputedStyle(item).position === 'absolute') {
            item.children[0].tabIndex = -1;
        } else {
            item.children[0].tabIndex = 0;
        }
    }
};

let servicesItems = document.querySelector('.services__list').children;
toggleItemsTabIndex(servicesItems, false);

window.matchMedia('(min-width: 768px) and (max-width: 1119px),').addEventListener('change', function(evt) {
    toggleItemsTabIndex(servicesItems, false);
});

let buttonMore = document.querySelector('.button-more');
const buttonMoreDefaultText = buttonMore.textContent;

buttonMore.addEventListener('click', function() {
    if (buttonMore.classList.toggle('button-more--active')) {
        buttonMore.textContent = buttonMore.dataset.another_text;
        toggleItemsStyle(servicesItems);
    } else {
        buttonMore.textContent = buttonMoreDefaultText;
        toggleItemsStyle(servicesItems);
    }

    function toggleItemsStyle(arr) {
        for (let item of arr) {
            if (window.getComputedStyle(item).position === 'absolute') {
                item.classList.add('services__item--visible');
                item.children[0].tabIndex = 0;
            } else if (Array.from(item.classList).includes('services__item--visible')) {
                item.classList.remove('services__item--visible');
                item.children[0].tabIndex = -1;
            }
        }
    };
});