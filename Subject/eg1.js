const { Subject, Observable } = rxjs;

const observable = new Observable((subscriber) => {
	subscriber.next(Math.floor(Math.random() * 99) + 1);
	subscriber.next(Math.floor(Math.random() * 99) + 1);
});

const observerA = {
	next(x) {
		console.log("got value for A " + x);
	},
	error(err) {
		console.error("something wrong occurred: " + err);
	},
	complete() {
		console.log("done");
	},
}

const observerB = {
	next(x) {
		console.log("got value for B " + x);
	}
}

const disposal = observable.subscribe(observerA);
observable.subscribe(observerB);
const subject = new Subject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(Math.floor(Math.random() * 99) + 1);
subject.next(Math.floor(Math.random() * 99) + 1);