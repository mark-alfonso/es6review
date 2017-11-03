function getPerson() {
	let name = 'John';
	let age = 25;

/*	return {
		name: name,
		age: age
	};*/

	// Object shorthand
	return { 
		name,
		age,
		greet() { //method shorthand
			return `Hello, ${this.name}.`;
		}
	}
}

console.log(getPerson().greet());