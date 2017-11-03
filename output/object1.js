'use strict';

function getPerson() {
	var name = 'John';
	var age = 25;

	/*	return {
 		name: name,
 		age: age
 	};*/

	// Object shorthand
	return {
		name: name,
		age: age,
		greet: function greet() {
			//method shorthand
			return 'Hello, ' + this.name + '.';
		}
	};
}

console.log(getPerson().greet());