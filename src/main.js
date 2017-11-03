
/*
var name = "Joe";
Other declaration:
- let
- const
*/

function fire(bool) {
	if(bool) {
		var foo = "bar"; //when var is used it is being hoisted and like being declared at the top
		console.log(foo);
	} else {
		console.log(foo); // hoisting
	}
}

fire(false);

/*
let, const are for block declaration
a lot of people always users "let" 

const -- not 100% immutable, can't reassign, can push
	  -- use for values not to be replaced
const names = ['John', 'Susan']

names = ['Mark', 'Sai']; //can't be;
names.push('Kram') // can be

default to const
then use let if need reassignment
don't use var, less use case
*/
