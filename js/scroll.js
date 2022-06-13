$(document).ready(function(){

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller: ".scroller"
    });


    gsap.to(".s", {
        scrollTrigger: ".s", 
        duration: 2, 
    });
})