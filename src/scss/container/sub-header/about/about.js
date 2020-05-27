let expandBtn = document.querySelector('.about__expand-btn');
let expandBtnDefaultText = expandBtn.textContent;
let aboutText = document.querySelector('.about__text');
// 
export default function about() {
    expandBtn.addEventListener('click', function() {
        aboutText.classList.toggle('about__text--expand');
        expandBtn.classList.toggle('expand-btn--active');
        if (expandBtn.textContent === expandBtnDefaultText) {
            expandBtn.textContent = expandBtn.dataset.active_text;
        } else {
            expandBtn.textContent = expandBtnDefaultText;
        }
    })
}