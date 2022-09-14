const { Observable } = rxjs;

const observable = new Observable((subscriber) => {
	// console.log(subscriber);
	// debugger;
	console.log('hii');
	subscriber.next(1);
	// subscriber.next(2);
	// subscriber.next(3);
	subscriber.error('hello world');
	// subscriber.next(4);

	// setTimeout(() => {
	// 	subscriber.next(4);
	// 	subscriber.complete();
	// }, 1000);
});

console.log("just before subscribe");
const observer = {
	// complete(x) {
	// 	console.log("got value " + x);
	// },
	// next(err) {
	// 	console.log("something wrong occurred: " + err);
	// },
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
