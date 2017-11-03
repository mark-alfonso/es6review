/*
Classes are first class citizen, they van be passed around
*/

function log(strategy) {
	strategy.handle();
}

class ConsoleLogger {
	handle() {
		console.log('Using the alert strategy to log.');
	}
}

log(new ConsoleLogger); 
