import initSwiper from './swiper-settings';
import services from '../scss/container/content/section/services/services';
import about from '../scss/container/sub-header/about/about';
import menu from '../scss/container/menu/menu';
import modal from '../scss/container/modal/modal';

window.addEventListener('DOMContentLoaded', function() {
    initSwiper();
    menu();
    about();
    services();
    modal();
});


console.log('Works!');