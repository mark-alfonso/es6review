"use strict";

/* Default parameters */

function defaultDiscountRate() {
	return .10;
}

function applyDiscount(cost) {
	var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDiscountRate();

	return cost - cost * discount;
}

console.log(applyDiscount(100));