/**
 * Returns an Observable that skips the first count items emitted by the source Observable.
 */

const { skip, of, interval, take } = rxjs;

// of(1, 2, 3, 4, 5, 6)
// 	.pipe(skip(3))
// 	.subscribe(console.log, console.log,() => console.log('completed'));

interval(10)
  .pipe(
    skip(10),
    take(5)
  )
  .subscribe(console.log, console.log,() => console.log('completed'));
