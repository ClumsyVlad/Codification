let navLinks = document.querySelectorAll('.link-button');
let sections = document.querySelectorAll('.section');
let body = document.querySelector('.body');
let svgObects = document.querySelectorAll('partners-slide__image');
let svgUses = document.querySelectorAll('partners-slide__image use');
let tabsList = document.querySelector('.about-tabs-pagination');
let tabsLink = document.querySelectorAll('.about-tabs-logo');
let burgerButton = document.querySelector('.burger-button');
let headerList = document.querySelector('.header-nav__list');

body.addEventListener('click', function(event){
    if (event.target.classList.contains('link-button')) {
        event.target.preventDefault;
        sections.forEach((element) => {
            element.classList.remove('active-section');
        });
        navLinks.forEach((element) => {
            element.classList.remove('active-section-link');
        });
        event.target.classList.add('active-section-link');
        document.querySelector(`#${event.target.dataset.link}`).classList.add('active-section');
        burgerButton.classList.remove('active');
        headerList.classList.remove('active');
    } else if (event.target == burgerButton) {
        burgerButton.classList.toggle('active');
        headerList.classList.toggle('active');
    } else if (event.target == headerList) {
        headerList.classList.remove('active');
    } else if (!event.target.classList.contains('link-button')) {
    } else {
        // console.log('Some trouble');
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
        disableOnInteraction: false,
    },
    // allowTouchMove: false,
    speed: 5000,
    centeredSlides: false,
    loopAdditionalSlides: 1
});
let aboutSlider = new Swiper('.about-slider', {
    mousewheel: true,
    slidesPerView: 'auto',
    spaceBetween: 250,
    speed: 750,
    // centeredSlides: true,
    // scrollbar: {
    //     el: '.about-slider-scrollbar',
    //     hide: false,
    //     draggable: true,
    // },
    freeMode: false,
    navigation: {
        nextEl: '.about-slider-next',
        prevEl: '.about-slider-prev',
    },
});
if (window.matchMedia('(max-width: 450px)').matches) {
    cardsNumber = 'auto';
    cardsGroup = 1;
} else if (window.matchMedia('(max-width: 850px)').matches) {
    cardsNumber = 2;
    cardsGroup = 2;
} else if (window.matchMedia('(max-width: 1050px)').matches) {
    cardsNumber = 3;
    cardsGroup = 3;
} else if (window.matchMedia('(min-width: 1050px)').matches) {
    cardsNumber = 4;
    cardsGroup = 4;
};
let gallerySlider = new Swiper('.team-gallery-slider', {
    slidesPerView: cardsNumber,
    slidesPerGroup: cardsGroup,
    spaceBetween: 40,
    speed: 300,
    mousewheel: true,
    // scrollbar: {
    //     el: '.team-slider-scrollbar',
    //     hide: false,
    //     draggable: true,
    // },
    navigation: {
        nextEl: '.team-slider-next',
        prevEl: '.team-slider-prev',
    }
});
let aboutTabs = new Swiper('.about-tabs', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 0,
    allowTouchMove: false,
    // scrollbar: {
    //     el: '.tabs-slider-scrollbar',
    //     hide: false,
    //     draggable: true,
    // },
});
let studySlider = new Swiper('.study-slider', {
    mousewheel: true,
    slidesPerView: 'auto',
    spaceBetween: 250,
    speed: 750,
    // scrollbar: {
    //     el: '.study-slider-scrollbar',
    //     hide: false,
    //     draggable: true,
    // },
    navigation: {
        nextEl: '.study-slider-next',
        prevEl: '.study-slider-prev',
    },
});
let bootcampSlider = new Swiper('.bootcamp-slider', {
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 250,
    speed: 750,
    // scrollbar: {
    //     el: '.bootcamp-slider-scrollbar',
    //     hide: false,
    //     draggable: true,
    // },
    navigation: {
        nextEl: '.bootcamp-slider-next',
        prevEl: '.bootcamp-slider-prev',
    },
});
let pricingSlider = new Swiper ('.pricing-slider', {
    mousewheel: true,
    slidesPerView: 'auto',
    speed: 750,
    // scrollbar: {
    //     el: '.bootcamp-slider-scrollbar',
    //     hide: false,
    //     draggable: true,
    // },
});
let joinSlider = new Swiper ('.join-slider', {
    mousewheel: true,
    slidesPerView: 'auto',
    speed: 750,
    // scrollbar: {
    //     el: '.bootcamp-slider-scrollbar',
    //     hide: false,
    //     draggable: true,
    // },
});


if (document.querySelector('.about-section')) {
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

    alianceSlider.el.addEventListener('mouseover', function() {
        alianceSlider.autoplay.stop();
    });
    
    alianceSlider.el.addEventListener('mouseout', function() {
        alianceSlider.autoplay.start();
    });
};

bootcampSlider.on('transitionStart', function (event) {
    if (document.querySelector('.swiper-slide-active.bootcamp-slide.show-hero')) {
        document.querySelector('.superhero-block').classList.add('show-hero');
    } else {
        document.querySelector('.superhero-block').classList.remove('show-hero');
    }
});


if (document.querySelector('.hero-section')) {
    let animationCanvas = document.querySelector('.hero-animation-canvas');
    let neonLines = document.querySelectorAll('.hero-neon-line');
    let line1 = document.querySelector('#path-neon-line-1');
    let animationDuration = 10000;
    // let canvasAnimation = anime({
    //     autoplay: true
    // });
    var tl = anime.timeline({
        easing: 'linear',
        duration: animationDuration,
        loop: true
    });
    let path = anime.path('#path-neon-line-path');  

    tl
    // .add({
    //     targets: '#animate-cloudnative-hat',
    //     translateX: path('x'),
    //     translateY: path('y'),
    //     translateZ: [70, 70],
    // }, 0)
    .add({
        targets: neonLines,
        strokeDashoffset: [
            anime.setDashoffset, 0
        ],
        strokeDasharray: [
            anime.setDasharray, 2428
        ],
    }, 0);

    // animationCanvas.onmouseover = tl.pause;
    // animationCanvas.onmouseout = tl.play;


    particlesJS.load('particles-js', '/js/particlesjs-config.json', function() {
    });
    VanillaTilt.init(animationCanvas, {
        max: 25,
        transition: true,
        speed: 400,
        reverse: true,
        gyroscope: true
    });
    
} else if(!(document.querySelector('.hero-section'))) {
    let netsParent = document.querySelector('.background-nets');
    let netsWidth = netsParent.offsetWidth;
    let netsHeight = netsParent.offsetHeight;
    // VANTA.NET({
    //     el: "#background-nets",
    //     mouseControls: true,
    //     touchControls: false,
    //     gyroControls: true,
    //     height: netsHeight,
    //     width: netsWidth,
    //     scale: 1.25,
    //     scaleMobile: 1.00,
    //     color: 0x000000,
    //     backgroundColor: 0x001029,
    //     backgroundAlpha: 0,
    //     points: 7.00,
    //     maxDistance: 25.00,
    //     spacing: 20.00,
    // });
};
// Blog section
if (document.querySelector('.blog-section')) {
    // Blog slider
    let blogSlider = new Swiper('.blog-slider', {
        slidesPerView: 'auto',
        spaceBetween: 70,
        speed: 300,
        // scrollbar: {
        //     el: '.blog-slider-scrollbar',
        //     hide: false,
        //     draggable: true,
        // },
        navigation: {
            nextEl: '.blog-slider-next',
            prevEl: '.blog-slider-prev',
        }
    });
    // Blog article cut
    let blogArticles = document.querySelectorAll('.blog-article');
    blogArticles.forEach((element) => {
        $clamp(element, {
            clamp: 8,
            useNativeClamp: false
        });
    });
    let readMoreParrent = document.querySelector('.blog-slider');
    let readMoreList = document.querySelectorAll('.read-more-button');
    // console.log(readMoreList);
    readMoreList.forEach((element, i) => element.dataset.article = i);

    readMoreParrent.addEventListener('click', function(event) {
        if (event.target.classList.contains('read-more-button')) {
        //    console.log(event.target.dataset.article);
        }
    });
};
if (document.querySelector('.cloud-section')) {
    let cloudSlider = new Swiper('.cloud-slider', {
        mousewheel: true,
        slidesPerView: 'auto',
        spaceBetween: 250,
        speed: 750,
        // centeredSlides: true,
        // scrollbar: {
        //     el: '.cloud-slider-scrollbar',
        //     hide: false,
        //     draggable: true,
        // },
        navigation: {
            nextEl: '.cloud-slider-next',
            prevEl: '.cloud-slider-prev',
        },
    });
    // Slide 1 animation
    let tlSlide1 = anime.timeline({
        easing: 'linear',
        loop: false
    });
    let cog = document.querySelector('#cog-element');
    let lock = document.querySelector('#lock-element');
    let cogPath = document.querySelector('#cog');
    let circlePath = document.querySelector('#circle');
    let firstArrowPath = document.querySelector('#arrow1');
    let firstLinePath = document.querySelector('#line1');
    let secondLinePath = document.querySelector('#line2');
    let secondArrowPath = document.querySelector('#arrow2');
    let keyholePath = document.querySelector('#keyhole');
    let keyLine1 = document.querySelector('#lock1');
    let keyLine2 = document.querySelector('#lock2');
    let keyLine3 = document.querySelector('#lock3');
    let keyLine4 = document.querySelector('#lock4');

    tlSlide1
    .add({
        targets: cogPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500
    }, 0+2000)
    .add({
        targets: circlePath,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1000
    }, 0+2000)
    .add({
        targets: firstArrowPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500
    }, 1500+2000)
    .add({
        targets: firstLinePath,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 500
    }, 3000+2000)
    .add({
        targets: secondLinePath,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 500
    }, 3000+2000)
    .add({
        targets: secondArrowPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500
    }, 3500+2000)
    .add({
        targets: keyLine1,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500
    }, 0+2000)
    .add({
        targets: keyLine4,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500
    }, 0+2000)
    .add({
        targets: keyLine2,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500
    }, 1500+2000)
    .add({
        targets: keyLine3,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500
    }, 1500+2000)
    .add({
        targets: keyholePath,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 2000
    }, 3000+2000)

    // Slide 2 animation 
    let tlSlide2 = anime.timeline({
        easing: 'linear',
        loop: true
    });
    let cabelGroup = document.querySelector('#cabellines');
    let stacksGroup = document.querySelector('#stacks');
    let cloudConnectionsGroup = document.querySelector('#cloudconnections');
    let cabelLines = document.querySelectorAll('.cabelline');
    let firstBoxLights = document.querySelectorAll('.box1light');
    let secondBoxLights = document.querySelectorAll('.box2light');
    let thirdBoxLights = document.querySelectorAll('.box3light');
    let firstBoxForvardLight = document.querySelector('#box1forvardlight');
    let thirdBoxForvardLight = document.querySelector('#box3forvardlight');
    let thirdBoxBottomLight = document.querySelector('#box3bottomsidelight');
    let thirdBoxSideLights = document.querySelectorAll('.box3sidelight');
    let cloudCables = document.querySelectorAll('.cloudcable');
    let cloudLights = document.querySelectorAll('.cloudlight');
    let cloudArrow = document.querySelector('.cloudarrowforward');
    let screenLogos = document.querySelector('.screenlogos');
    let screenLines = document.querySelectorAll('.screenlogoslines');
    let cloudDuration = 10000;
    anime({
        targets: cabelLines,
        easing: 'linear',
        duration: function(el, i) { return anime.random(1000, 2000) },
        direction: 'normal',
        strokeDashoffset: [anime.setDashoffset, 0],
        strokeDasharray: function(el, i) { return anime.random(10, 20) },
        loop: true
    });
    anime({
        targets: firstBoxForvardLight,
        easing: 'linear',
        duration: 300,
        direction: 'alternate',
        loop: true,
        fill: '#009580',
    });
    anime({
        targets: thirdBoxForvardLight,
        easing: 'linear',
        duration: 300,
        delay: 150,
        direction: 'alternate',
        loop: true,
        fill: '#009580',
    });
    tlSlide2
    .add({
        targets: firstBoxLights,
        fill: '#009580',
        easing: 'linear',
        duration: 1000,
        direction: 'normal',
        delay: function(el, i) { return i * 250 },
    }, 0)
    .add({
        targets: secondBoxLights,
        fill: '#009580',
        easing: 'linear',
        duration: 1000,
        direction: 'normal',
        delay: function(el, i) { return i * 250 },
    }, 1000)
    .add({
        targets: thirdBoxLights,
        fill: '#009580',
        easing: 'linear',
        duration: 1000,
        direction: 'normal',
        delay: function(el, i) { return i * 250 },
    }, 2000)
    .add({
        targets: thirdBoxBottomLight,
        fill: '#009580',
        easing: 'linear',
        duration: 500,
        direction: 'normal'
    }, 3500)
    .add({
        targets: thirdBoxSideLights,
        fill: '#009580',
        easing: 'linear',
        duration: 500,
        direction: 'normal',
        delay: function(el, i) { return i * 250 },
    }, 4000)
    .add({
        targets: cloudCables,
        easing: 'linear',
        duration: 3000,
        opacity: 1,
        direction: 'normal',
        strokeDashoffset: [anime.setDashoffset, 0],
    }, 4500)
    .add({
        targets: cloudLights,
        fill: '#009580',
        easing: 'linear',
        duration: 1000,
        direction: 'normal'
    }, 6000)
    .add({
        targets: cloudArrow,
        fill: '#fe018a',
        easing: 'linear',
        duration: 500,
        direction: 'normal'
    }, 6000)
    .add({
        targets: cloudArrow,
        fill: '#009580',
        easing: 'linear',
        duration: 2000,
        direction: 'normal'
    }, 7000)
    .add({
        targets: [cabelGroup, stacksGroup, cloudConnectionsGroup],
        opacity: 0,
        easing: 'linear',
        duration: 2000,
        direction: 'normal'
    }, 10000)
    .add({
        targets: screenLogos,
        opacity: 1,
        easing: 'linear',
        duration: 500,
        direction: 'normal'
    }, 10000)
    .add({
        targets: screenLines,
        easing: 'linear',
        duration: 1000,
        direction: 'normal',
        strokeDashoffset: [anime.setDashoffset, 0]
    }, 10500)
    .add({
        targets: screenLines,
        easing: 'linear',
        duration: 2000,
        direction: 'normal',
        fill: '#ffffff'
    }, 11500)
    .add({
        targets: screenLogos,
        opacity: 0,
        easing: 'linear',
        duration: 2000,
        direction: 'normal'
    }, 15000)
    .add({
        targets: [cabelGroup, stacksGroup, cloudConnectionsGroup],
        opacity: 1,
        easing: 'linear',
        duration: 2000,
        direction: 'normal'
    }, 15000)

    // Video
    const player = new Plyr('#player', {});
};
