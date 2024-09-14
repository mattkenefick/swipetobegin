"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSwipe = void 0;
/**
 * @return void
 */
function addCss() {
    var css = document.createElement('style');
    css.innerHTML = "\n        .pm-ios-scroller {\n            opacity: 0;\n        }\n\n        .scroll-cta {\n            height: 100vh;\n            left: 0;\n            position: fixed;\n            transition: opacity 0.75s ease-in-out;\n            top: 0;\n            width: 100vw;\n        }\n\n        .primary-content {\n            height: 100vh;\n            left: 0;\n            position: fixed;\n            top: 0;\n            width: 100vw;\n        }\n\n        html.state-swipetobegin.state-fullscreen .scroll-cta,\n        html.state-swipetobegin.state-fullscreen .pm-ios-scroller {\n            opacity: 0;\n            pointer-events: none;\n        }\n\n        html.state-swipetobegin.fullscreen-ready .scroll-cta,\n        html.state-swipetobegin:not(.state-fullscreen) .primary-content {\n            display: none;\n        }\n\n        html.state-fullscreen body {\n            overflow: hidden;\n        }\n\n        html.state-fullscreen,\n        html.state-fullscreen body {\n            -webkit-overflow-scrolling: touch;\n            overflow: hidden;\n        }\n\n        html.state-fullscreen .primary-content {\n            opacity: 0.0;\n            transition: opacity 0.25s ease-in-out;\n        }\n\n        html:not(.state-swipetobegin) .primary-content,\n        html.fullscreen-ready .primary-content {\n            opacity: 1;\n        }\n\n        html:not(.state-swipetobegin) .scroll-cta {\n            display: none;\n        }\n    ";
    document.head.appendChild(css);
}
/**
 * @param HTMLElement targetElement
 * @return void
 */
function addScrollableContent(targetElement) {
    var div = document.createElement('div');
    div.classList.add('pm-ios-scroller');
    div.innerHTML = '<p>.</p>'.toString().repeat(50);
    targetElement.prepend(div);
}
/**
 * @param number threshold
 * @param number interval
 * @return Promise<void>
 */
function startScrollTest(threshold, interval) {
    if (threshold === void 0) { threshold = 3; }
    if (interval === void 0) { interval = 250; }
    var sameScroll = 0;
    var lastScroll = 0;
    return new Promise(function (resolve) {
        var scrollCheck = setInterval(function () {
            if (window.scrollY === 0)
                return;
            sameScroll += window.scrollY !== lastScroll ? 0 : 1;
            lastScroll = window.scrollY;
            if (sameScroll > threshold) {
                clearInterval(scrollCheck);
                resolve();
            }
        }, interval);
    });
}
/**
 * @param boolean disableTouchMove
 * @return void
 */
function checkFullscreen(disableTouchMove) {
    if (disableTouchMove === void 0) { disableTouchMove = true; }
    if (window.innerHeight === window.outerHeight) {
        document.documentElement.classList.add('state-fullscreen');
        window.scrollTo(0, document.body.scrollHeight);
        if (disableTouchMove) {
            // using passive with default is a hack that works
            document.body.addEventListener('touchmove', function (e) { return e.preventDefault(); }, { passive: false });
        }
    }
}
/**
 * @param Event e
 * @return void
 */
function Handle_OnDocumentChange(e) {
    checkFullscreen();
}
/**
 * @param HTMLElement targetElement
 * @param boolean landscapeOnly
 * @return Promise<void>
 */
function waitForSwipe(targetElement, landscapeOnly) {
    if (landscapeOnly === void 0) { landscapeOnly = true; }
    targetElement = targetElement || document.querySelector('main');
    // Add CSS to head
    addCss();
    return new Promise(function (resolve, reject) {
        if (window.innerHeight >= window.innerWidth && landscapeOnly) {
            reject('This only works in the requested landscape mode');
            return;
        }
        // Check for required elements
        if (!document.querySelector('.scroll-cta') || !document.querySelector('.primary-content')) {
            reject('You need a .scroll-cta and .primary-content element');
            return;
        }
        // Mark we're using swipe to begin
        document.documentElement.classList.add('state-swipetobegin');
        // Delay prevents the browser from jumping back to scroll position
        setTimeout(function () { return addScrollableContent(targetElement); }, 100);
        // Listen for scroll events
        window.addEventListener('scroll', Handle_OnDocumentChange);
        window.addEventListener('resize', Handle_OnDocumentChange);
        // Listen for movement
        startScrollTest().then(function () {
            window.removeEventListener('scroll', Handle_OnDocumentChange);
            window.removeEventListener('resize', Handle_OnDocumentChange);
            document.documentElement.classList.add('fullscreen-ready');
            resolve();
        });
    });
}
exports.waitForSwipe = waitForSwipe;
