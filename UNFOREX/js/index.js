// Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
var elements2ToShow= document.querySelectorAll('.show-on-srcoll2')
function loop() {

Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
        element.classList.add('animated');
    } else {
        element.classList.remove('animated');
    }
});
Array.prototype.forEach.call(elements2ToShow, function (element) {
    if (isElementInViewport(element)) {
        element.classList.add('animated2');
    } else {
        element.classList.remove('animated2');
    }
});
scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
}
var rect = el.getBoundingClientRect();
return (
    (rect.top <= 0
        && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}