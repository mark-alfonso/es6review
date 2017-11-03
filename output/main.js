'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Classes are first class citizen, they van be passed around
*/

function log(strategy) {
	strategy.handle();
}

var ConsoleLogger = function () {
	function ConsoleLogger() {
		_classCallCheck(this, ConsoleLogger);
	}

	_createClass(ConsoleLogger, [{
		key: 'handle',
		value: function handle() {
			console.log('Using the alert strategy to log.');
		}
	}]);

	return ConsoleLogger;
}();

log(new ConsoleLogger());