const factsNum = "facts-numbers";
const factsNumItem = "facts-item-num";

const factsRect = "facts-rectangles";
const factsRectItem = "facts-item-rect";

const headerMenuId = "header-menu";
const toggleHeaderId = "toggle-header";

const searchHeaderContentId = "search-header-content";
const searchHeaderId = "search-header";

const factTopId = 'fact-top';
const qFactsId = 'q-facts';

const defenceId = 'defence';
const securityId = 'security';

const whiteRightId = 'white-right';
const blackLeftId = 'black-left';

const body = document.querySelector('body');

function openLeft () {
    const blackLeft = document.getElementById(blackLeftId);
    blackLeft.classList.add('open');

    setTimeout(() => {
        window.location.href = blackLeft.href;
    }, [1000])
}
function openRight () {
    const whiteRight = document.getElementById(whiteRightId);
    whiteRight.classList.add('open');

    setTimeout(() => {
        window.location.href = whiteRight.href;
    }, [1000])
}

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
    if (document.getElementById(factsNum)) {
        document.addEventListener('scroll', function(){ 
            scrollListenerNumber(factsNum, factsNumItem)
            scrollListenerNumber(factsRect, factsRectItem)
        })
    }

    const headerMenu = document.getElementById(headerMenuId);
    const toggleHeader = document.getElementById(toggleHeaderId);

    if (toggleHeader) {
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
    }


    const searchHeader = document.getElementById(searchHeaderId);
    const searchHeaderContent = document.getElementById(searchHeaderContentId);

    searchHeader.addEventListener('click', function(e) {
        if (searchHeader.classList.contains('clicked')) return;

        e.preventDefault();
        searchHeader.classList.add('clicked')
        searchHeaderContent.classList.add('active');
    })

    const factTop = document.getElementById(factTopId); 
    const qFacts = document.getElementById(qFactsId);
    if (factTop) {
        factTop.addEventListener('click', function() {
            qFacts.scrollIntoView({behavior: "smooth"});
        })
    }

    const defence = document.getElementById(defenceId);
    const security = document.getElementById(securityId);

    if (defence) {
        defence.addEventListener('click', function(e) {
            e.preventDefault();
    
            defence.classList.add('open');
            security.classList.add('close');
    
            body.classList.add('defence');
    
            setTimeout(() => {
                window.location.href = defence.href;
            }, [1500])
        })
    
    }
    if (security) {
        security.addEventListener('click', function(e) {
            e.preventDefault();
    
            security.classList.add('open');
            defence.classList.add('close');
    
    
            setTimeout(() => {
                window.location.href = defence.href;
            }, [1500])
        })
    }

    const whiteRight = document.getElementById(whiteRightId);
    const blackLeft = document.getElementById(blackLeftId);

    if (whiteRight) {
        whiteRight.addEventListener('click', function(e) {
            e.preventDefault();

            openRight();
        })
    }

    if (blackLeft) {
        blackLeft.addEventListener('click', function(e) {
            e.preventDefault();

            openLeft();
        })
    }


})

