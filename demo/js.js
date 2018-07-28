/**
 * JavaScript is fun
 *
 * Spent a whole night building this theme
 * now my neck hurts. Time to hit the bed.
 *
 * @param String hello Hello.
 * @param Number count Count of hells said.
 * @param Boolean isBye True or False.
 * @return Boolean
 * @since 1.0.0
 */

// String.
const hello = 'Hey, hello there there there there';

// Class.
class vsc extends React.Component {}

// Const.
const ahmad = function nameAhmad() {
	return 'Ahmad';
};

// Let.
let awais = () => 'Awais';
console.log(awais);

/**
 * Maedah's Function.
 *
 * @param String name
 */
function maedah(name) {
	return name;
}

maedah('Maedah Batool');

// Regex.
const coursePlatformURL = new RegExp('/' + window.location.host + '/');

import { btnBarSvgSpeed } from './constants';

/**
 *  Angle increment.
 *
 * — 360/(total speed values).
 * — 360/6 = 60.
 */
export const speedAngles = {
	'1': '0',
	'1.25': '60',
	'1.5': '120',
	'1.75': '180',
	'2': '240',
	'0.75': '300'
};

/**
 * Speed SVG CSS.
 *
 * @param Number Angle to rotate the SVG.
 */
export const speedCSS = (one, two, three) => {
	btnBarSvgSpeed.css({
		transform: 'rotate(' + one + 'deg)',
		transform: 'rotate(' + two + 'deg)',
		transform: 'rotate(' + three + 'deg)'
	});
};
