const { Subject } = rxjs;

const observable = new Subject();

const observer = {
	complete(x) {
		console.log("got value " + x);
	},
	next(err) {
		console.log("something wrong occurred: " + err);
	},
	error(err) {
		console.log("done" + err);
	},
}
observable.subscribe(observer);
observable.subscribe(observer);
observable.subscribe(observer);
observable.subscribe(observer);
observable.subscribe(observer);
observable.subscribe(observer);

observable.next(Math.floor(Math.random() * 99) + 1);

console.log("just before subscribe");

// observable.subscribe(
// 	(x) => {
// 		console.log(x);
// 	},
// 	(y) => {
// 		console.log(y);
// 	},
// 	(z) => {
// 		console.log(z);
// 	}
// );
