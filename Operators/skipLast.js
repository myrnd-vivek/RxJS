/**
 * Skip a specified number of values before the completion of an observable.
*/

const { from, take, skipLast, interval } = rxjs;


// from([1, 2, 3, 4,5]).pipe(skipLast(2)).subscribe(console.log);

interval(100)
  .pipe(
    take(15),
    skipLast(10)
  )
  .subscribe(console.log, console.log, () => console.log('completed'));

