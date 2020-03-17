(function() {
	console.log('THEME TEMPLATE');
	const bodyNode = document.querySelector('body');

	// Callback function to execute when mutations are observed.
	const watchForBootstrap = function(mutationsList, observer) {
		for (let mutation of mutationsList) {
			if (mutation.type === 'attributes') {
				const isUsingShadesOfPurple = document.querySelector('[class*="ahmadawais-shades-of-purple"]');
				const tokensLoaded = document.querySelector('.vscode-tokens-styles');
				const tokenStyles = document.querySelector('.vscode-tokens-styles').innerText;

				// Everything we need is ready, so initialize
				if (isUsingShadesOfPurple && tokensLoaded && tokenStyles) {
					initNeonDreams([DISABLE_GLOW]);
				}
			}
		}
	};

	// Use a mutation observer to check when we can bootstrap the theme.
	const observer = new MutationObserver(watchForBootstrap);
	observer.observe(bodyNode, { attributes: true });

	// Replace the styles with the glow theme
	const initNeonDreams = disableGlow => {
		var themeStyleTag = document.querySelector('.vscode-tokens-styles');
		var initialThemeStyles = themeStyleTag.innerText;
		var updatedThemeStyles = initialThemeStyles;

		if (!disableGlow) {
			/* Replace yellow */
			updatedThemeStyles = updatedThemeStyles.replace(
				/color: #fad000;/g,
				'color: #fad000; text-shadow: 0 0 2px #393a33, 0 0 8px #fad000[NEON_BRIGHTNESS], 0 0 2px #ffc800[NEON_BRIGHTNESS];'
			);

			/* Replace orange */
			updatedThemeStyles = updatedThemeStyles.replace(
				/color: #ff9d00;/g,
				'color: #ff9d00; text-shadow: 0 0 2px #393a33, 0 0 8px #ff0000[NEON_BRIGHTNESS], 0 0 2px #ff0000[NEON_BRIGHTNESS];'
			);

			/* Replace blue */
			updatedThemeStyles = updatedThemeStyles.replace(
				/color: #9effff;/g,
				'color: #9effff; text-shadow: 0 0 2px #001716, 0 0 3px #03edf9[NEON_BRIGHTNESS], 0 0 5px #03edf9[NEON_BRIGHTNESS], 0 0 8px #03edf9[NEON_BRIGHTNESS];'
			);

			/* Replace green */
			updatedThemeStyles = updatedThemeStyles.replace(
				/color: #a5ff90;/g,
				'color: #a5ff90; text-shadow: 0 0 0.5px #100c0f, 0 0 5px #1ef393[NEON_BRIGHTNESS], 0 0 7px #00fb59[NEON_BRIGHTNESS];'
			);

			/* Replace green */
			updatedThemeStyles = updatedThemeStyles.replace(
				/color: #3ad900;/g,
				'color: #3ad900; text-shadow: 0 0 2px #100c0f, 0 0 10px #3ad900[NEON_BRIGHTNESS], 0 0 35px #212724[NEON_BRIGHTNESS];'
			);

			/* Replace neon pink */
			updatedThemeStyles = updatedThemeStyles.replace(
				/color: #ff628c;/g,
				'color: #ff628c; text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c[NEON_BRIGHTNESS], 0 0 5px #fc1f2c[NEON_BRIGHTNESS], 0 0 25px #fc1f2c[NEON_BRIGHTNESS];'
			);

			/* Replace neon pink */
			updatedThemeStyles = updatedThemeStyles.replace(
				/color: #ff7edb;/g,
				'color: #f92aad; text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;'
			);
		}

		/* Append the remaining styles */
		updatedThemeStyles = `${updatedThemeStyles}[CHROME_STYLES]`;
		themeStyleTag.innerText = updatedThemeStyles.replace(/(\r\n|\n|\r)/gm, '');
		console.log('Shades of Purple Glow: Initialized!');
		observer.disconnect();
	};
})();
