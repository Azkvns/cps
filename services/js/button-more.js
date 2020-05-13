let buttonMore = document.querySelector('.button-more');
const buttonMoreDefaultText = buttonMore.textContent;

let servicesList = document.querySelector('.services__list');

buttonMore.addEventListener('click', function() {
    console.log('click');
    if (buttonMore.classList.toggle('button-more--active')) {
        servicesList.classList.add('services__list--opened');
        buttonMore.textContent = buttonMore.dataset.another_text;
    } else {
        servicesList.classList.remove('services__list--opened');
        buttonMore.textContent = buttonMoreDefaultText;
    }

});