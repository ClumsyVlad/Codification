let netsParent = document.querySelector('.background-nets');
let netsWidth = netsParent.offsetWidth;
let netsHeight = netsParent.offsetHeight;
VANTA.NET({
    el: "#background-nets",
    mouseControls: true,
    touchControls: false,
    gyroControls: true,
    height: netsHeight,
    width: netsWidth,
    scale: 1.25,
    scaleMobile: 1.00,
    color: 0x000000,
    backgroundColor: 0x001029,
    backgroundAlpha: 0,
    points: 7.00,
    maxDistance: 25.00,
    spacing: 20.00,
});