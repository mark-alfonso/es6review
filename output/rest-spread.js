"use strict";

/* Rest */

function sum() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	// will put all the params to an array
	return numbers.reduce(function (prev, current) {
		return prev + current;
	});
}

function sum() {
	for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		numbers[_key2] = arguments[_key2];
	}

	return numbers.reduce(function (prev, current) {
		return prev + current;
	});
}
//console.log(sum(1, 2, 3, 4, 5));

/* Spread */
function mult(x, y) {
	return x * y;
}

var nums = [1, 2];

console.log(mult.apply(undefined, nums));