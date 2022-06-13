function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function changeStyleOfText () {
    const factsNumbers = document.getElementById("facts-numbers");
    if (!isInViewport(factsNumbers)) return;
    document.removeEventListener("scroll", changeStyleOfText);

}

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


    document.addEventListener('scroll', changeStyleOfText);
})
