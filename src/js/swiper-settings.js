import Swiper from 'swiper';
import '../scss/style.scss';

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia('(min-width:1366px)');

// keep track of swiper instances to destroy later
let subNavSwiper;
let servicesBrandsSwiper;
let servicesServicesSwiper;
let servicesPriceSwiper;



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {

        // clean up old instances and inline styles when available
        if (mySwiper !== undefined) mySwiper.destroy(true, true);

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {

        // fire small viewport version of swiper
        return enableSwiper();

    }

};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const enableSwiper = function() {

    subNavSwiper = new Swiper('.sub-header__sub-nav-wrapper', {
        slidesPerView: 'auto',

        freeMode: true,
    });


    servicesBrandsSwiper = new Swiper('.services--brands', {
        slidesPerView: 'auto',

        freeMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

    servicesServicesSwiper = new Swiper('.services--tech', {
        slidesPerView: 'auto',

        freeMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

    servicesPriceSwiper = new Swiper('.services--price', {
        slidesPerView: 'auto',

        freeMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export default function initSwiper() {
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
}