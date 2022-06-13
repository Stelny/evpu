const factsNum = "facts-numbers";
const factsNumItem = "facts-item-num";

const factsRect = "facts-rectangles";
const factsRectItem = "facts-item-rect";

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
})
