class User {
	constructor(username, email) {
		this.username = username;
		this.email = email;
	}

	static register(...args) {
		return new User(...args)
	}

	get foo() {
		return 'foo';
	}

	set goo() {
		return 'goo';
	}

	changeEmail(newEmail) {
		this.email = newEmail;
	}
}

// named contructor User::register('test');

// let user = new User('Mark Alfonso', 'mark@mark.com');
let user = User.register('Mark Alfonso', 'mark@mark.com');

user.changeEmail('kram@google.com');

console.dir(user);