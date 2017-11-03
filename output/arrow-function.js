'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var TaskCollection = function () {
	function TaskCollection() {
		var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		_classCallCheck(this, TaskCollection);

		this.tasks = tasks;
	}

	// use single line arrow if only simple


	_createClass(TaskCollection, [{
		key: 'log',
		value: function log() {
			this.tasks.forEach(function (task) {
				return console.log(task);
			}); //if 1 param, no ()
			// this.tasks.forEach(()=> console.log('asdasd')); //if no param, use ()
			// this.tasks.forEach((task, index)=> console.log(task + index)); //if multiple, enclose with param
		}
		//use curly braces if multiple statements/steps
		/*	prepare() {
  		this.tasks.forEach(task => task.toGulp());
  	} */

	}, {
		key: 'prepare',
		value: function prepare() {
			var _this = this;

			// below code, 'this' is undefined for strict mode in ECMAScript

			// this.tasks.forEach(function(task) {
			// 	console.log(this);
			// });


			// below code will work
			this.tasks.forEach(function (task) {
				console.log(_this);
			});
		}
	}]);

	return TaskCollection;
}();

var Task = function () {
	function Task() {
		_classCallCheck(this, Task);
	}

	_createClass(Task, [{
		key: 'toGulp',
		value: function toGulp() {
			console.log('converting to gulp');
		}
	}]);

	return Task;
}();

new TaskCollection([new Task(), new Task(), new Task()]).prepare();

/*class Task{}

new TaskCollection([
	new Task, new Task, new Task
]).log();*/