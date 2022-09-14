const { of, map, first, scan, interval } = rxjs;

// of(1, 2, 3).subscribe((v) => console.log(`value: ${v}`));

// of(1, 2, 3)
// 	.pipe(map((x) => x * x))
// 	.subscribe((v) => console.log(`value: ${v}`));

// of(1, 2, 3)
// 	.pipe(first())
// 	.subscribe((v) => console.log(`value: ${v}`));

// of(3, 2, 3)
// 	.pipe(first(), map((x) => x*x))
// 	.subscribe((v) => console.log(`value: ${v}`));

// const obs = of(3, 2, 3);

// console.log(obs);

// map((x) => console.log(x))(obs);

// of(1, 2, 3)
// 	.pipe(map((x) => x * x))
// 	.subscribe((v) => console.log(v));

// of(4, 5, 6)
// 	.pipe(
// 		scan((total, n) => {
//       debugger;
//       console.log('scan',total,n);
// 			var res = total + n;
// 			return res;
// 		})
// 	)
// 	.subscribe((v) => console.log(v));


// import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();