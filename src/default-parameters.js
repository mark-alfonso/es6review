/* Default parameters */

function defaultDiscountRate(){
	return .10;
}


function applyDiscount(cost, discount = defaultDiscountRate()) {
	return cost - (cost * discount); 
}

console.log(applyDiscount(100));