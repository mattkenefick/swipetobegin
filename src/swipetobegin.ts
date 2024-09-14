/**
 * @return void
 */
function addCss(): void {
	const css = document.createElement('style');
	css.innerHTML = `
        .pm-ios-scroller {
            opacity: 0;
        }

        .scroll-cta {
            height: 100vh;
            left: 0;
            position: fixed;
            transition: opacity 0.75s ease-in-out;
            top: 0;
            width: 100vw;
        }

        .primary-content {
            height: 100vh;
            left: 0;
            position: fixed;
            top: 0;
            width: 100vw;
        }

        html.state-swipetobegin.state-fullscreen .scroll-cta,
        html.state-swipetobegin.state-fullscreen .pm-ios-scroller {
            opacity: 0;
            pointer-events: none;
        }

        html.state-swipetobegin.fullscreen-ready .scroll-cta,
        html.state-swipetobegin:not(.state-fullscreen) .primary-content {
            display: none;
        }

        html.state-fullscreen body {
            overflow: hidden;
        }

        html.state-fullscreen,
        html.state-fullscreen body {
            -webkit-overflow-scrolling: touch;
            overflow: hidden;
        }

        html.state-fullscreen .primary-content {
            opacity: 0.0;
            transition: opacity 0.25s ease-in-out;
        }

        html:not(.state-swipetobegin) .primary-content,
        html.fullscreen-ready .primary-content {
            opacity: 1;
        }

        html:not(.state-swipetobegin) .scroll-cta {
            display: none;
        }
    `;

	document.head.appendChild(css);
}

/**
 * @param HTMLElement targetElement
 * @return void
 */
function addScrollableContent(targetElement: HTMLElement): void {
	const div = document.createElement('div');
	div.classList.add('pm-ios-scroller');
	div.innerHTML = '<p>.</p>'.toString().repeat(50);
	targetElement.prepend(div);
}

/**
 * @param number threshold
 * @param number interval
 * @return Promise<void>
 */
function startScrollTest(threshold: number = 3, interval: number = 250): Promise<void> {
	let sameScroll = 0;
	let lastScroll = 0;

	return new Promise((resolve) => {
		let scrollCheck = setInterval(() => {
			if (window.scrollY === 0) return;

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
function checkFullscreen(disableTouchMove: boolean = true): void {
	if (window.innerHeight === window.outerHeight) {
		document.documentElement.classList.add('state-fullscreen');
		window.scrollTo(0, document.body.scrollHeight);

		if (disableTouchMove) {
			// using passive with default is a hack that works
			document.body.addEventListener('touchmove', (e: TouchEvent) => e.preventDefault(), { passive: false });
		}
	}
}

/**
 * @param Event e
 * @return void
 */
function Handle_OnDocumentChange(e: Event) {
	checkFullscreen();
}

/**
 * @param HTMLElement targetElement
 * @param boolean landscapeOnly
 * @return Promise<void>
 */
export function waitForSwipe(targetElement?: HTMLElement, landscapeOnly: boolean = true): Promise<void> {
	targetElement = targetElement || (document.querySelector('main') as HTMLElement);

	// Add CSS to head
	addCss();

	return new Promise((resolve, reject) => {
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
		setTimeout(() => addScrollableContent(targetElement!), 100);

		// Listen for scroll events
		window.addEventListener('scroll', Handle_OnDocumentChange);
		window.addEventListener('resize', Handle_OnDocumentChange);

		// Listen for movement
		startScrollTest().then(() => {
			window.removeEventListener('scroll', Handle_OnDocumentChange);
			window.removeEventListener('resize', Handle_OnDocumentChange);
			document.documentElement.classList.add('fullscreen-ready');
			resolve();
		});
	});
}
