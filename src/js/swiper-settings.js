import Swiper from 'swiper';
import '../scss/style.scss';

let swipersData = {
    subNavSwiper: {
        swiperVar: undefined,
        breakpoint: '(min-width: 1120px)',
        swiperID: '.sub-header__container',
        params: {
            slidesPerView: 'auto',
            freeMode: true,
        }
    },
    servicesBrandsSwiper: {
        swiperVar: undefined,
        swiperID: '.services--brands',
        breakpoint: '(min-width: 768px)',
        params: {
            slidesPerView: 'auto',
            freeMode: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        }
    },
    servicesTechSwiper: {
        swiperVar: undefined,
        breakpoint: '(min-width: 768px)',
        swiperID: '.services--tech',
        params: {
            slidesPerView: 'auto',
            freeMode: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        }
    },
    priceSwiper: {
        swiperVar: undefined,
        breakpoint: '(min-width: 768px)',
        swiperID: '.price',
        params: {
            slidesPerView: 'auto',
            freeMode: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        }
    },
}



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


const breakpointChecker = function(swiperName, breakpoint, swiperID, params) {
    return function() {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {

            // clean up old instances and inline styles when available
            if (swipersData[swiperName].swiperVar !== undefined) {
                swipersData[swiperName].swiperVar.destroy(true, true);
            }
            // or/and do nothing
            return;

            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {

            // fire small viewport version of swiper
            return enableSwiper(swiperName, swiperID, params);

        }
    }
};


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const enableSwiper = function(swiperName, swiperID, params) {
    swipersData[swiperName].swiperVar = new Swiper(swiperID, params);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export default function initSwiper() {
    for (let swiperName in swipersData) {
        let breakpoint = window.matchMedia(swipersData[swiperName].breakpoint);
        let params = [
            swiperName,
            breakpoint,
            swipersData[swiperName].swiperID,
            swipersData[swiperName].params,
        ]
        breakpoint.addListener(breakpointChecker(...params));
        breakpointChecker(...params)();
    }
}