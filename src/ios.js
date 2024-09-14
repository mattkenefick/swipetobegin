function addCss() {
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

function addScrollableContent(targetElement) {
	const div = document.createElement('div');
	div.classList.add('pm-ios-scroller');
	div.innerHTML = '<p>.</p>'.repeat(50);
	targetElement.prepend(div);
}

function startScrollTest(threshold = 3, interval = 250) {
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

function checkFullscreen(disableTouchMove = true) {
	if (window.innerHeight === window.outerHeight) {
		document.documentElement.classList.add('state-fullscreen');
		window.scrollTo(0, document.body.scrollHeight);

		if (disableTouchMove) {
			// using passive with default is a hack that works
			document.body.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
		}
	}
}

export function waitForSwipe(targetElement, landscapeOnly = true) {
	targetElement || (targetElement = document.querySelector('main'));

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
		setTimeout(() => addScrollableContent(targetElement), 100);

		// Listen for scroll events
		window.addEventListener('scroll', checkFullscreen);
		window.addEventListener('resize', checkFullscreen);

		// Listen for movement
		startScrollTest().then(() => {
			window.removeEventListener('scroll', checkFullscreen);
			window.removeEventListener('resize', checkFullscreen);
			document.documentElement.classList.add('fullscreen-ready');
			resolve();
		});
	});
}
