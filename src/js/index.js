import initSwiper from './swiper-settings';
import services from './services';
import about from './about';
import menu from './menu';
import modal from './modal';

window.addEventListener('DOMContentLoaded', function() {
    initSwiper();
    menu();
    about();
    services();
    modal();
});