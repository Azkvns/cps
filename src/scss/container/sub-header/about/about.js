let expandBtn = document.querySelector('.about__expand-btn');
let text = document.querySelector('.about__text');
// 
export default function about() {
    expandBtn.addEventListener('click', function() { text.classList.toggle('expand'); })
}