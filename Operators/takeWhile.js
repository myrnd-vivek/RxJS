// Emits values emitted by the source Observable so long as each value satisfies the given predicate, and then completes as soon as this predicate is not satisfied.

// Predicate : A function that evaluates a value emitted by the source Observable and returns a boolean

//takeWhile Second Argument set to true the value that caused predicate to return false will also be emitted.

const { interval, takeWhile } = rxjs;

interval(100)
	.pipe(takeWhile((val) => val < 10, true))
	.subscribe(console.log,console.error,() => console.log('completed'));
