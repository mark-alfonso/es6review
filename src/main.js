 /* Rest */

function sum(...numbers) { // will put all the params to an array
	return numbers.reduce(function(prev, current) {
		return prev + current;
	});
}

function sum(...numbers) {
	return numbers.reduce(
		(prev, current) => prev + current
	);
}
//console.log(sum(1, 2, 3, 4, 5));

/* Spread */
function mult(x, y) {
	return x * y;
}

let nums = [1, 2];

console.log(mult(... nums));
