let servicesBrandsItems = document.querySelectorAll('.services--brands .services__item');
let servicesTechItems = document.querySelectorAll('.services--tech .services__item');
// 
let servicesBrandsButton = document.querySelector('.services--brands .expand-btn');
let defaultExpandBtnText = servicesBrandsButton.textContent;
let servicesTechButton = document.querySelector('.services--tech .expand-btn');

function showAllItems(items, btn) {
    return function() {
        for (let item of items) {
            item.classList.toggle('services__item--visible');
        }
        btn.classList.toggle('expand-btn--active');
        if (btn.textContent === defaultExpandBtnText) {
            btn.textContent = btn.dataset.active_text;
        } else {
            btn.textContent = defaultExpandBtnText;
        }
    }
}


export default function services() {
    servicesBrandsButton.addEventListener('click', showAllItems(servicesBrandsItems, servicesBrandsButton));
    servicesTechButton.addEventListener('click', showAllItems(servicesTechItems, servicesTechButton));
}