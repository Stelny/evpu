const factsNum = "facts-numbers";
const factsNumItem = "facts-item-num";

const factsRect = "facts-rectangles";
const factsRectItem = "facts-item-rect";

const headerMenuClass = "header-menu";
const toggleHeaderClass = "toggle-header";

const searchHeaderContentClass = "search-header-content";
const searchHeaderClass = "search-header";

const factTopClass = 'fact-top';
const qFactsClass = 'q-facts';

const defenceClass = 'defence';
const securityClass = 'security';

const body = document.querySelector('body');



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function scrollListenerNumber (elem, item) {
    const factsNumbers = document.getElementById(elem);
    if (!isInViewport(factsNumbers)) return;
    changeStyleOfText(item)
}

function changeStyleOfText(it) {
    const items = document.getElementsByClassName(it)
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.classList.add("active");
    }
}

$(document).ready(function(){
    document.addEventListener('scroll', function(){ 
        scrollListenerNumber(factsNum, factsNumItem)
        scrollListenerNumber(factsRect, factsRectItem)
    })

    const headerMenu = document.getElementById(headerMenuClass);
    const toggleHeader = document.getElementById(toggleHeaderClass);

    toggleHeader.addEventListener('click', function() {

        if (headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');
            headerMenu.classList.remove('border-t')
            return;
        }
        headerMenu.classList.add('active');
        setTimeout(() => {
            headerMenu.classList.add('border-t')
        }, [1000])
    })

    const searchHeader = document.getElementById(searchHeaderClass);
    const searchHeaderContent = document.getElementById(searchHeaderContentClass);

    searchHeader.addEventListener('click', function(e) {
        if (searchHeader.classList.contains('clicked')) return;

        e.preventDefault();
        searchHeader.classList.add('clicked')
        searchHeaderContent.classList.add('active');
    })

    const factTop = document.getElementById(factTopClass); 
    const qFacts = document.getElementById(qFactsClass);

    factTop.addEventListener('click', function() {
        qFacts.scrollIntoView({behavior: "smooth"});
    })

    const defence = document.getElementById(defenceClass);
    const security = document.getElementById(securityClass);

    defence.addEventListener('click', function(e) {
        e.preventDefault();

        defence.classList.add('open');
        security.classList.add('close');

        body.classList.add('defence');

        setTimeout(() => {
            window.location.href = defence.href;
        }, [1500])
    })

    security.addEventListener('click', function(e) {
        e.preventDefault();

        security.classList.add('open');
        defence.classList.add('close');


        setTimeout(() => {
            window.location.href = defence.href;
        }, [1500])
    })

    /*gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller: ".scroller"
    });

    gsap.to("#q-facts", {
        scrollTrigger: "#q-facts", 
        duration: 2, 
    });

    gsap.to("#work", {
    scrollTrigger: {
        trigger: "#work",
        toggleActions: "restart pause reverse pause"
    }, 
    duration: 1, 
    });

    gsap.to("#touch", {
    scrollTrigger: "#touch", 
    scale: 2, 
    repeat: -1, 
    yoyo: true, 
    ease: "power2"
    });*/
})
