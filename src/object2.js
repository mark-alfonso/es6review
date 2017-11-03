/*let person = {
	name: 'Karen',
	age: 32
}

// object destructuring
let {name, age} = person;

console.log(age);*/

/*let data  = {
	name: 'Karen',
	age: 32,
	results: ['foo', 'bar'],
	count: 30
};

function getDate(data) {
	let { results, count } = data;
	console.log(results, count);
}
*/

function greet({ name, age }) {
	console.log(`Hello, ${name}, age ${age}`);
}

greet({
	name: 'Mark',
	age: 24
});
