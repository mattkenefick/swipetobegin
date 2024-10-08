"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSwipeOnLandscape = exports.waitForSwipe = void 0;
/**
 * @return void
 */
function addCss() {
    var css = document.createElement('style');
    css.innerHTML = "\n\t\thtml, body {\n\t\t\t/* Height 100% breaks iOS because it reduces viewport size */\n\t\t\theight: auto;\n\t\t}\n\n        .pm-ios-scroller {\n            opacity: 0;\n        }\n\n        .scroll-cta {\n            height: 100vh;\n            left: 0;\n            position: fixed;\n            transition: opacity 0.75s ease-in-out;\n            top: 0;\n            width: 100vw;\n        }\n\n        .primary-content {\n            height: 100vh;\n            left: 0;\n            position: fixed;\n            top: 0;\n            width: 100vw;\n        }\n\n        html.state-swipetobegin.state-fullscreen .scroll-cta,\n        html.state-swipetobegin.state-fullscreen .pm-ios-scroller {\n            opacity: 0;\n            pointer-events: none;\n        }\n\n        html.state-swipetobegin.fullscreen-ready .scroll-cta,\n        html.state-swipetobegin:not(.state-fullscreen) .primary-content {\n            display: none;\n        }\n\n        html.state-fullscreen body {\n            overflow: hidden;\n        }\n\n        html.state-fullscreen,\n        html.state-fullscreen body {\n            -webkit-overflow-scrolling: touch;\n            overflow: hidden;\n        }\n\n        html.state-fullscreen .primary-content {\n            opacity: 0.0;\n            transition: opacity 0.25s ease-in-out;\n        }\n\n        html:not(.state-swipetobegin) .primary-content,\n        html.fullscreen-ready .primary-content {\n            opacity: 1;\n        }\n\n        html:not(.state-swipetobegin) .scroll-cta {\n            display: none;\n        }\n    ";
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
    return new Promise(function (resolve) {
        var scrollCheck = setInterval(function () {
            sameScroll += window.innerHeight !== window.outerHeight ? 0 : 1;
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
        // mk: Using scrollHeight here will sometimes forever scroll
        window.scrollTo(0, window.innerHeight);
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
function waitForSwipe(options) {
    var targetElement = options.targetElement || document.querySelector('main');
    var landscapeOnly = typeof options.landscapeOnly === 'undefined' ? true : options.landscapeOnly;
    var callback = options.callback || (function () { });
    // Add CSS to head
    addCss();
    return new Promise(function (resolve, reject) {
        // Reject if not landscape mode
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
        window.addEventListener('orientationchange', Handle_OnDocumentChange);
        window.addEventListener('scroll', Handle_OnDocumentChange);
        window.addEventListener('resize', Handle_OnDocumentChange);
        // Listen for movement
        startScrollTest().then(function () {
            window.removeEventListener('orientationchange', Handle_OnDocumentChange);
            window.removeEventListener('scroll', Handle_OnDocumentChange);
            window.removeEventListener('resize', Handle_OnDocumentChange);
            document.documentElement.classList.add('fullscreen-ready');
            checkFullscreen();
            resolve();
        });
    });
}
exports.waitForSwipe = waitForSwipe;
/**
 * @param ISwipeOptions options
 * @return void
 */
function waitForSwipeOnLandscape(options) {
    /**
     * @return void
     */
    function onLandscape() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wait for user to swipe up
                    return [4 /*yield*/, waitForSwipe({
                            landscapeOnly: true,
                        })];
                    case 1:
                        // Wait for user to swipe up
                        _a.sent();
                        // Disable mobile taps and whatnot
                        options.callback && options.callback();
                        // Disable landscape mode
                        window.removeEventListener('resize', onLandscape);
                        return [2 /*return*/];
                }
            });
        });
    }
    // If it's landscape already, just run the callback
    if (window.innerWidth > window.innerHeight) {
        onLandscape();
    }
    // Otherwise wait for the device to change
    else {
        window.addEventListener('resize', onLandscape);
    }
}
exports.waitForSwipeOnLandscape = waitForSwipeOnLandscape;
