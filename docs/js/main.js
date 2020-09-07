let navLinks = document.querySelectorAll('.link-button');
let sections = document.querySelectorAll('.section');
let body = document.querySelector('.body');
let svgObects = document.querySelectorAll('partners-slide__image');
let svgUses = document.querySelectorAll('partners-slide__image use');
let tabsList = document.querySelector('.about-tabs-pagination');
let tabsLink = document.querySelectorAll('.about-tabs-logo');
// svgUses.forEach((element) => setSizes());

// function setSizes() {

// };

body.addEventListener('click', function(event){
    if (event.target.classList.contains('link-button')) {
        event.target.preventDefault;
        sections.forEach((element) => {
            element.classList.remove('active-section');
        });
        document.querySelector(`#${event.target.dataset.link}`).classList.add('active-section');
    } else if (!event.target.classList.contains('link-button')) {
        console.log('Работает не то');
    } else {
        console.log('Не работает');
    }
});

let partnersSlider = new Swiper('.partners-slider', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    allowTouchMove: false,
    speed: 5000,
    centeredSlides: true,
    loopAdditionalSlides: 1
});
let alianceSlider = new Swiper('.aliance-slider', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    allowTouchMove: false,
    speed: 5000,
    centeredSlides: true,
    loopAdditionalSlides: 1
});
let cloudSlider = new Swiper('.cloud-slider', {
    slidesPerView: 'auto',
    spaceBetween: 250,
    speed: 750,
    // centeredSlides: true,
    scrollbar: {
        el: '.cloud-slider-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.cloud-slider-next',
        prevEl: '.cloud-slider-prev',
    },
});
let aboutSlider = new Swiper('.about-slider', {
    slidesPerView: 'auto',
    spaceBetween: 250,
    speed: 750,
    // centeredSlides: true,
    scrollbar: {
        el: '.about-slider-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.about-slider-next',
        prevEl: '.about-slider-prev',
    },
});
let gallerySlider = new Swiper('.team-gallery-slider', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 300,
    scrollbar: {
        el: '.team-slider-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.team-slider-next',
        prevEl: '.team-slider-prev',
    },
    parallax: true,
});
let aboutTabs = new Swiper('.about-tabs', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 0,
    allowTouchMove: false,
    scrollbar: {
        el: '.tabs-slider-scrollbar',
        hide: false,
    },
});
let studySlider = new Swiper('.study-slider', {
    slidesPerView: 'auto',
    spaceBetween: 250,
    speed: 750,
    scrollbar: {
        el: '.study-slider-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.study-slider-next',
        prevEl: '.study-slider-prev',
    },
});

tabsLink[0].classList.add('active');
tabsLink.forEach((link, i) => link.dataset.slide = i);

tabsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('about-tabs-logo')) {
        aboutTabs.slideTo(event.target.dataset.slide);
    }
});

aboutTabs.on('slideChange', function (){
    tabsLink.forEach((element) => {
        element.classList.remove('active');
        tabsLink[aboutTabs.activeIndex].classList.add('active');
    });
});