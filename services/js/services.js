let servicesItems = document.querySelectorAll('.services__item--not-ms, .services__item--hidden');
for (let item of servicesItems) {
    item.children[0].tabIndex = "-1";
}

let buttonMore = document.querySelector('.button-more');
const buttonMoreDefaultText = buttonMore.textContent;

let servicesHiddenItems = document.querySelectorAll('.services__item--hidden');

buttonMore.addEventListener('click', function() {
    if (buttonMore.classList.toggle('button-more--active')) {
        buttonMore.textContent = buttonMore.dataset.another_text;
        attrToggle(false);
    } else {
        buttonMore.textContent = buttonMoreDefaultText;
        attrToggle(true);
    }

    function attrToggle(add) {
        for (let item of servicesHiddenItems) {
            if (add) {
                item.classList.add('services__item--hidden');
                item.children[0].tabIndex = -1;
            } else {
                item.classList.remove('services__item--hidden');
                item.children[0].tabIndex = 0;
            }
        }
    }
});