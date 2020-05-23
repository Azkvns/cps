import initSwiper from './swiper-settings';
import services from '../scss/container/content/section/services/services';
import about from '../scss/container/sub-header/about/about';


window.addEventListener('DOMContentLoaded', function() {
    initSwiper();
    about();
    services();
});


console.log('Works!');