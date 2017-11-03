/*class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	log() {
		this.tasks.forEach(function(task) {
			console.log(task);
		});
	}
}

class Task{}

new TaskCollection([
	new Task, new Task, new Task
]).log();*/

class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	// use single line arrow if only simple
	log() {
		this.tasks.forEach(task => console.log(task)); //if 1 param, no ()
		// this.tasks.forEach(()=> console.log('asdasd')); //if no param, use ()
		// this.tasks.forEach((task, index)=> console.log(task + index)); //if multiple, enclose with param
	}
	//use curly braces if multiple statements/steps
/*	prepare() {
		this.tasks.forEach(task => task.toGulp());
	} */

	prepare() {
		// below code, 'this' is undefined for strict mode in ECMAScript

		// this.tasks.forEach(function(task) {
		// 	console.log(this);
		// });


		// below code will work
		this.tasks.forEach((task) => {
			console.log(this);
		});  
	}
}

class Task {
	toGulp() {
		console.log('converting to gulp');
	}
}

new TaskCollection([
	new Task, new Task, new Task
]).prepare();

/*class Task{}

new TaskCollection([
	new Task, new Task, new Task
]).log();*/
