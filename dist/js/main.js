let navLinks = document.querySelectorAll('.link-button');
let sections = document.querySelectorAll('.section');
let body = document.querySelector('.body');
let svgObects = document.querySelectorAll('partners-slide__image');
let svgUses = document.querySelectorAll('partners-slide__image use');

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
let aboutSlider = new Swiper('.about-slider', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    speed: 750,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.about-slider-next',
        prevEl: '.about-slider-prev',
    },
});