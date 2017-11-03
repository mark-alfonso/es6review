let names = ['Mark', 'Jek', 'Meds', "Hemel"];

// old
/*names = names.map(function(name) {
	return name + ' is cool.';
});*/

// new
// names = names.map(name => name + ' is cool.');
names = names.map(name => `${name} is cool.`);

console.log(names);